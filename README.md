# TTRSS-JS-API
This package is a primitive JavaScript/TypeScript implementation of a
subset of the
[TinyTinyRSS API](https://git.tt-rss.org/git/tt-rss/wiki/ApiReference).

You can use it to retrieve categories, feeds, headlines and articles
from a TinyTiny RSS instance.

## Installation

    npm install ttrss-js-api

## Usage
The API is exposed through the [API](./docs/interfaces/api.html)
interface.

To build an API instance, use the
[API Factory](./docs/classes/apifactory.html):

    const ApiFactory = require('ttrss-js-api').ApiFactory;
    const api = ApiFactory.build('http://my-ttrs-instance.com');

You can now login to your TinyTiny RSS instance and retrieve categories,
feeds, headlines and articles:

    (async () => {
        await api.login('username', 'password');
        const categories = await api.getCategories();
        const feeds = await api.getFeedsInCategory(categories[0].id);
        const headlines = await api.getHeadlinesForFeed(feeds[1].id);
        const article = await api.getArticle(headlines[0].id);
        console.log(article.content);
        await api.logout();
    })();

Detail on each entity is available in the API documentation:

- [Category](./docs/classes/category.html)
- [Feed](./docs/classes/feed.html)
- [Headline](./docs/classes/headline.html)
- [Article](./docs/classes/article.html)
