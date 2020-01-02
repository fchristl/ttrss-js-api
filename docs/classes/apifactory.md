[ttrss-js-api - v0.0.2](../README.md) › [Globals](../globals.md) › [ApiFactory](apifactory.md)

# Class: ApiFactory

Factory that builds an [Api](../interfaces/api.md) instance.

## Hierarchy

* **ApiFactory**

## Index

### Methods

* [build](apifactory.md#static-build)

## Methods

### `Static` build

▸ **build**(`endpoint`: string): *[Api](../interfaces/api.md)*

*Defined in [api-factory.ts:11](https://github.com/fchristl/ttrss-js-api/blob/79fe3ba/src/api-factory.ts#L11)*

Build a new TinyTiny RSS API instance that uses the given endpoint URL.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | full URL to your TinyTiny RSS instance (without `/api` at the end).  |

**Returns:** *[Api](../interfaces/api.md)*
