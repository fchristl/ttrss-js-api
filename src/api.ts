import {Article, Category, Feed, Headline} from './api-types';

/**
 * This interface describes how to call the TinyTiny RSS API.
 *
 * Start by calling {@link login}. Once successfully logged in, you can use all other API calls.
 *
 * Normally, you'll want to proceed like this:
 *
 * 1. Call {@link login} to open a session
 * 2. Get all categories using {@link getCategories}
 * 3. Get all feeds in a category using {@link getFeedsInCategory}
 * 4. Get all headlines in a feed using {@link getHeadlinesForFeed}
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
     * Get all categories.
     */
    getCategories(): Promise<Category[]>;

    /**
     * Get all feeds in the given category.
     * @param categoryId
     */
    getFeedsInCategory(categoryId: number): Promise<Feed[]>;

    /**
     * Get all headlines for a given feed.
     * @param feedId
     */
    getHeadlinesForFeed(feedId: number): Promise<Headline[]>;
    getUnread(): Promise<number>;
    isLoggedIn(): Promise<boolean>;
    login(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
}
