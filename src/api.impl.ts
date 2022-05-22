import {default as axios} from 'axios';
import {
    GetArticleResponse,
    GetFeedsResponse,
    GetUnreadResponse,
    SubscribeToFeedResult,
    UnsubscribeFeedResult,
    IsLoggedInResult,
    LoginResult
} from './api-response-types';
import {Api, GetCategoriesOptions, GetFeedsOptions, GetHeadlinesOptions, SubscribeToFeedOptions, UnsubscribeFeedOptions} from './api';
import {Article, Category, Feed, Headline, Status} from './api-types';
import {GetCategoriesResponse} from './api-response-types/GetCategoriesResponse';
import {GetHeadlinesResponse} from './api-response-types/GetHeadlinesResponse';

export class ApiImpl implements Api {

    private sessionId: string | undefined;

    private constructor(private endpoint: string) {

    }

    static build(endpoint: string): Api {
        return new ApiImpl(endpoint);
    }

    async getArticle(articleId: number): Promise<Article> {
        const articles = await this.makeRequest<GetArticleResponse>('getArticle', {article_id: articleId});
        if (articles.length === 0) {
            throw new Error('ARTICLE_NOT_FOUND');
        }
        const article = articles[0];
        article.id = +article.id;
        article.feed_id = +article.feed_id;
        return article;
    }

    async getCategories(options?: GetCategoriesOptions): Promise<Category[]> {
        const requestOptions: any = {};

        if (options?.unreadOnly != null) {
            requestOptions.unread_only = options.unreadOnly;
        }

        const categories = await this.makeRequest<GetCategoriesResponse>('getCategories', requestOptions);
        // categories, weirdly, might come back with a string ID instead of a number. That's why we
        // transform them before returning.
        for (const category of categories) {
            category.id = +category.id;
        }
        return categories;
    }

    async getFeeds(options?: GetFeedsOptions): Promise<Feed[]> {
        const requestOptions: any = {};

        if (options?.categoryId != null) {
            requestOptions.cat_id = options.categoryId;
        }
        if (options?.unreadOnly != null) {
            requestOptions.unread_only = options.unreadOnly;
        }

        return this.makeRequest<GetFeedsResponse>('getFeeds', requestOptions);
    }

    async getHeadlines(options?: GetHeadlinesOptions): Promise<Headline[]> {
        const requestOptions: any = {};

        if (options?.feedId != null) {
            requestOptions.feed_id = options.feedId;
        }
        if (options?.orderBy != null) {
            requestOptions.order_by = options.orderBy;
        }
        if (options?.sinceId != null) {
            requestOptions.since_id = options.sinceId;
        }
        if (options?.includeAttachments != null) {
            requestOptions.include_attachments = options.includeAttachments;
        }
        if (options?.showContent != null) {
            requestOptions.show_content = options.showContent;
        }
        if (options?.showExcerpt != null) {
            requestOptions.show_excerpt = options.showExcerpt;
        }

        const headlines = await this.makeRequest<GetHeadlinesResponse>('getHeadlines', requestOptions);
        for (const headline of headlines) {
            headline.feed_id = +headline.feed_id;
        }
        return headlines;
    }

    async subscribeToFeed(options?: SubscribeToFeedOptions): Promise<Status> {
        return (await this.makeRequest<SubscribeToFeedResult>('subscribeToFeed', options)).status;
    }

    async unsubscribeFeed(options?: UnsubscribeFeedOptions): Promise<UnsubscribeFeedResult> {
        return (await this.makeRequest<UnsubscribeFeedResult>('unsubscribeFeed', options));
    }

    async getUnread(): Promise<number> {
        return +(await this.makeRequest<GetUnreadResponse>('getUnread')).unread;
    }

    async isLoggedIn() {
        return (await this.makeRequest<IsLoggedInResult>('isLoggedIn')).status;
    }

    async login(user: string, password: string): Promise<void> {
        const loginResult = await this.makeRequest<LoginResult>('login', {user, password});
        this.sessionId = loginResult.session_id;
    }

    async logout(): Promise<void> {
        await this.makeRequest('logout');
    }

    private async makeRequest<T = any>(op: string, params?: any): Promise<T> {
        const requestParams = {op, ...params};
        if (this.sessionId) {
            requestParams.sid = this.sessionId;
        }
        const response = await axios.post(`${this.endpoint}/api/`, requestParams);
        if (response.data.content.error != null) {
            throw new Error(response.data.content.error);
        }
        return response.data.content;
    }

}
