import {default as axios} from 'axios';
import {
    GetArticleResponse,
    GetFeedsResponse,
    GetUnreadResponse,
    IsLoggedInResult,
    LoginResult
} from './api-response-types';
import {Api} from './api';
import {Article, Category, Feed, Headline} from './api-types';
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

    async getCategories(): Promise<Category[]> {
        const categories = await this.makeRequest<GetCategoriesResponse>('getCategories');
        // categories, weirdly, might come back with a string ID instead of a number. That's why we
        // transform them before returning.
        for (const category of categories) {
            category.id = +category.id;
        }
        return categories;
    }

    async getFeedsInCategory(categoryId: number): Promise<Feed[]> {
        return this.makeRequest<GetFeedsResponse>('getFeeds', {cat_id: categoryId});
    }

    async getHeadlinesForFeed(feedId: number): Promise<Headline[]> {
        const headlines = await this.makeRequest<GetHeadlinesResponse>('getHeadlines', {feed_id: feedId});
        for (const headline of headlines) {
            headline.feed_id = +headline.feed_id;
        }
        return headlines;
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
