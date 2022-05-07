import {Article, Category, Feed, Headline, Status} from './api-types';
import UnubscribeFeedResult from './api-response-types';

export interface GetCategoriesOptions {
    unreadOnly?: boolean;
}

export interface GetFeedsOptions {
    categoryId?: number;
    unreadOnly?: boolean;
}

export interface GetHeadlinesOptions {
    feedId?: number;
    includeAttachments?: boolean;
    orderBy?: string;
    showContent?: boolean;
    showExcerpt?: boolean;
    sinceId?: number;
}

export interface SubscribeToFeedOptions {
    feed_url ?: string;
    category_id ?: number;
    login?: string;
    password ?: string;
}

export interface UnsubscribeFeedOptions {
    feed_id?: number;
}

/**
 * This interface describes how to call the TinyTiny RSS API.
 *
 * Start by calling {@link login}. Once successfully logged in, you can use all other API calls.
 *
 * Normally, you'll want to proceed like this:
 *
 * 1. Call {@link login} to open a session
 * 2. Get all categories using {@link getCategories}
 * 3. Get all feeds in a category using {@link getFeeds}
 * 4. Get all headlines in a feed using {@link getHeadlines}
 * 5. Note the headline's {@link Headline.id|ID} and use it to get the full article using the same ID and calling
 *    {@link getArticle}.
 */
export interface Api {
    /**
     * Get a single {@link Article} by id.
     * @param articleId
     */
    getArticle(articleId: number): Promise<Article>;

    /**
     * Get categories based on the given options.
     */
    getCategories(options?: GetCategoriesOptions): Promise<Category[]>;

    /**
     * Get feeds based on the given options. If no options are provided, all feeds are retrieved.
     */
    getFeeds(options?: GetFeedsOptions): Promise<Feed[]>;

    /**
     * Get headlines based on the given options.
     */
    getHeadlines(options?: GetHeadlinesOptions): Promise<Headline[]>;
    getUnread(): Promise<number>;
    subscribeToFeed(options?: SubscribeToFeedOptions): Promise<Status>;
    unsubscribeFeed(options?: UnsubscribeFeedOptions): Promise<UnubscribeFeedResult>;
    isLoggedIn(): Promise<boolean>;
    login(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
}
