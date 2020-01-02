[ttrss-js-api - v0.0.4](README.md) › [Globals](globals.md)

# ttrss-js-api - v0.0.4

# TTRSS-JS-API
This package is a primitive JavaScript/TypeScript implementation of a
subset of the
[TinyTinyRSS API](https://git.tt-rss.org/git/tt-rss/wiki/ApiReference).

You can use it to retrieve categories, feeds, headlines and articles
from a TinyTiny RSS instance.

## Installation

    npm install ttrss-js-api

## Usage
The API is exposed through the [API](./docs/interfaces/api.md)
interface.

To build an API instance, use the
[API Factory](./docs/classes/apifactory.md):

    const ApiFactory = require('ttrss-js-api').ApiFactory;
    const api = ApiFactory.build('http://my-ttrs-instance.com');

You can now login to your TinyTiny RSS instance and retrieve categories,
feeds, headlines and articles:

    (async () => {
        await api.login('username', 'password');
        const categories = await api.getCategories();
        const feeds = await api.getFeeds({categoryId: categories[0].id});
        const headlines = await api.getHeadlines({feedId: feeds[1].id});
        const article = await api.getArticle(headlines[0].id);
        console.log(article.content);
        await api.logout();
    })();

Detail on each entity is available in the API documentation:

- [Category](./docs/classes/category.md)
- [Feed](./docs/classes/feed.md)
- [Headline](./docs/classes/headline.md)
- [Article](./docs/classes/article.md)
