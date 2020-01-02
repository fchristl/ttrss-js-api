import {Article, Category, Feed, Headline} from './api-types';

export interface Api {
    getArticle(articleId: number): Promise<Article>;
    getCategories(): Promise<Category[]>;
    getFeedsInCategory(categoryId: number): Promise<Feed[]>;
    getHeadlinesForFeed(feedId: number): Promise<Headline[]>;
    getUnread(): Promise<number>;
    isLoggedIn(): Promise<boolean>;
    login(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
}
