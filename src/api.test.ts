import {Api} from './api';
import {ApiImpl} from './api.impl';
import { expect } from 'chai';

describe('TTRSS API', () => {

    let api: Api;
    const host = process.env.RSS_HOST!;
    const username = process.env.RSS_USERNAME!;
    const password = process.env.RSS_PASSWORD!;

    beforeEach(async () => {
        api = ApiImpl.build(host);
        await api.login(username, password);
    });

    it('should login and logout', async () => {
        expect(await api.isLoggedIn()).to.be.true;
        await api.logout();
        expect(await api.isLoggedIn()).to.be.false;
    });

    it('should subscribe to feed', async () => {
        const firstCategory = (await api.getCategories())[0];
        const feed_url = "https://www.4sbooks.com/feed"
        const status = await api.subscribeToFeed({feed_url: feed_url, category_id: firstCategory.id});
        expect(status.code).to.be.lessThan(2);
    });

    it('should unsubscribe to feed', async () => {
        const firstCategory = (await api.getCategories())[0];
        const feed_url = "https://www.4sbooks.com/feed"
        const status = await api.subscribeToFeed({feed_url: feed_url, category_id: firstCategory.id});
        expect(status.code).to.be.lessThan(2);
        const res = await api.unsubscribeFeed({feed_id: status.feed_id});
        expect(res.status).to.be.eq('OK');
    });

    it('should retrieve the number of unread items', async () => {
        const unread = await api.getUnread();
        expect(unread).to.be.a('number');
        expect(unread).to.be.greaterThan(-1);
    });

    it('should retrieve the categories', async () => {
        const categories = await api.getCategories();
        expect(categories.length).to.be.greaterThan(0);
        expect(categories[0].id).not.to.equal(0);
        expect(categories[0].title).not.to.be.empty;
    });

    it('should retrieve all feeds', async () => {
        const feeds = await api.getFeeds();
        expect(feeds.length).to.be.greaterThan(0);
    });

    it('should retrieve feeds in a category', async () => {
        const firstCategory = (await api.getCategories())[0];
        const feeds = await api.getFeeds({categoryId: firstCategory.id});
        const firstFeed = feeds[0];
        expect(firstFeed.cat_id).to.equal(firstCategory.id);
        expect(firstFeed.feed_url).not.to.be.empty;
        expect(firstFeed.title).not.to.be.empty;
        expect(firstFeed.last_updated).to.be.greaterThan(0);
    });

    it('should retrieve headlines in a feed', async () => {
        const firstCategory = (await api.getCategories())[0];
        const feeds = await api.getFeeds({categoryId: firstCategory.id});
        const firstFeed = feeds[1];
        const headlines = await api.getHeadlines({feedId: firstFeed.id});
        expect(headlines.length).to.be.greaterThan(-1);
    });

    it('should retrieve an article', async () => {
        const firstCategory = (await api.getCategories())[0];
        const feeds = await api.getFeeds({categoryId: firstCategory.id});
        const firstFeed = feeds[1];
        const headlines = await api.getHeadlines({feedId: firstFeed.id});
        const firstHeadline = headlines[0];
        const article = await api.getArticle(firstHeadline.id);
        expect(article.id).to.equal(firstHeadline.id);
        expect(article.content).not.to.be.empty;
    })
});
