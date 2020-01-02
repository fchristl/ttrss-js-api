import {ApiImpl} from './api.impl';

/**
 * Factory that builds an {@link Api} instance.
 */
export class ApiFactory {
    /**
     * Build a new TinyTiny RSS API instance that uses the given endpoint URL.
     * @param endpoint - full URL to your TinyTiny RSS instance (without `/api` at the end).
     */
    static build(endpoint: string) {
        return ApiImpl.build(endpoint);
    }
}
