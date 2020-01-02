[ttrss-js-api - v0.0.2](../README.md) › [Globals](../globals.md) › [Api](api.md)

# Interface: Api

This interface describes how to call the TinyTiny RSS API.

Start by calling [login](api.md#login). Once successfully logged in, you can use all other API calls.

Normally, you'll want to proceed like this:

1. Call [login](api.md#login) to open a session
2. Get all categories using [getCategories](api.md#getcategories)
3. Get all feeds in a category using [getFeedsInCategory](api.md#getfeedsincategory)
4. Get all headlines in a feed using [getHeadlinesForFeed](api.md#getheadlinesforfeed)
5. Note the headline's [ID](../classes/headline.md#id) and use it to get the full article using the same ID and calling
   [getArticle](api.md#getarticle).

## Hierarchy

* **Api**

## Index

### Methods

* [getArticle](api.md#getarticle)
* [getCategories](api.md#getcategories)
* [getFeedsInCategory](api.md#getfeedsincategory)
* [getHeadlinesForFeed](api.md#getheadlinesforfeed)
* [getUnread](api.md#getunread)
* [isLoggedIn](api.md#isloggedin)
* [login](api.md#login)
* [logout](api.md#logout)

## Methods

###  getArticle

▸ **getArticle**(`articleId`: number): *Promise‹[Article](../classes/article.md)›*

*Defined in [api.ts:22](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L22)*

Get a single [Article](../classes/article.md) by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`articleId` | number |   |

**Returns:** *Promise‹[Article](../classes/article.md)›*

___

###  getCategories

▸ **getCategories**(): *Promise‹[Category](../classes/category.md)[]›*

*Defined in [api.ts:27](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L27)*

Get all categories.

**Returns:** *Promise‹[Category](../classes/category.md)[]›*

___

###  getFeedsInCategory

▸ **getFeedsInCategory**(`categoryId`: number): *Promise‹[Feed](../classes/feed.md)[]›*

*Defined in [api.ts:33](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L33)*

Get all feeds in the given category.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`categoryId` | number |   |

**Returns:** *Promise‹[Feed](../classes/feed.md)[]›*

___

###  getHeadlinesForFeed

▸ **getHeadlinesForFeed**(`feedId`: number): *Promise‹[Headline](../classes/headline.md)[]›*

*Defined in [api.ts:39](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L39)*

Get all headlines for a given feed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`feedId` | number |   |

**Returns:** *Promise‹[Headline](../classes/headline.md)[]›*

___

###  getUnread

▸ **getUnread**(): *Promise‹number›*

*Defined in [api.ts:40](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L40)*

**Returns:** *Promise‹number›*

___

###  isLoggedIn

▸ **isLoggedIn**(): *Promise‹boolean›*

*Defined in [api.ts:41](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L41)*

**Returns:** *Promise‹boolean›*

___

###  login

▸ **login**(`username`: string, `password`: string): *Promise‹void›*

*Defined in [api.ts:42](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`password` | string |

**Returns:** *Promise‹void›*

___

###  logout

▸ **logout**(): *Promise‹void›*

*Defined in [api.ts:43](https://github.com/fchristl/ttrss-js-api/blob/8dc74c7/src/api.ts#L43)*

**Returns:** *Promise‹void›*
