[ttrss-js-api - v0.0.4](../README.md) › [Globals](../globals.md) › [Api](api.md)

# Interface: Api

This interface describes how to call the TinyTiny RSS API.

Start by calling [login](api.md#login). Once successfully logged in, you can use all other API calls.

Normally, you'll want to proceed like this:

1. Call [login](api.md#login) to open a session
2. Get all categories using [getCategories](api.md#getcategories)
3. Get all feeds in a category using [getFeeds](api.md#getfeeds)
4. Get all headlines in a feed using [getHeadlines](api.md#getheadlines)
5. Note the headline's [ID](../classes/headline.md#id) and use it to get the full article using the same ID and calling
   [getArticle](api.md#getarticle).

## Hierarchy

* **Api**

## Index

### Methods

* [getArticle](api.md#getarticle)
* [getCategories](api.md#getcategories)
* [getFeeds](api.md#getfeeds)
* [getHeadlines](api.md#getheadlines)
* [getUnread](api.md#getunread)
* [isLoggedIn](api.md#isloggedin)
* [login](api.md#login)
* [logout](api.md#logout)

## Methods

###  getArticle

▸ **getArticle**(`articleId`: number): *Promise‹[Article](../classes/article.md)›*

*Defined in [api.ts:40](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L40)*

Get a single [Article](../classes/article.md) by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`articleId` | number |   |

**Returns:** *Promise‹[Article](../classes/article.md)›*

___

###  getCategories

▸ **getCategories**(`options?`: [GetCategoriesOptions](getcategoriesoptions.md)): *Promise‹[Category](../classes/category.md)[]›*

*Defined in [api.ts:45](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L45)*

Get categories based on the given options.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [GetCategoriesOptions](getcategoriesoptions.md) |

**Returns:** *Promise‹[Category](../classes/category.md)[]›*

___

###  getFeeds

▸ **getFeeds**(`options?`: [GetFeedsOptions](getfeedsoptions.md)): *Promise‹[Feed](../classes/feed.md)[]›*

*Defined in [api.ts:50](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L50)*

Get feeds based on the given options. If no options are provided, all feeds are retrieved.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [GetFeedsOptions](getfeedsoptions.md) |

**Returns:** *Promise‹[Feed](../classes/feed.md)[]›*

___

###  getHeadlines

▸ **getHeadlines**(`options?`: [GetHeadlinesOptions](getheadlinesoptions.md)): *Promise‹[Headline](../classes/headline.md)[]›*

*Defined in [api.ts:55](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L55)*

Get headlines based on the given options.

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [GetHeadlinesOptions](getheadlinesoptions.md) |

**Returns:** *Promise‹[Headline](../classes/headline.md)[]›*

___

###  getUnread

▸ **getUnread**(): *Promise‹number›*

*Defined in [api.ts:56](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L56)*

**Returns:** *Promise‹number›*

___

###  isLoggedIn

▸ **isLoggedIn**(): *Promise‹boolean›*

*Defined in [api.ts:57](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L57)*

**Returns:** *Promise‹boolean›*

___

###  login

▸ **login**(`username`: string, `password`: string): *Promise‹void›*

*Defined in [api.ts:58](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`password` | string |

**Returns:** *Promise‹void›*

___

###  logout

▸ **logout**(): *Promise‹void›*

*Defined in [api.ts:59](https://github.com/fchristl/ttrss-js-api/blob/2ed851a/src/api.ts#L59)*

**Returns:** *Promise‹void›*
