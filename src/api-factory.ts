import {ApiImpl} from './api.impl';

export class ApiFactory {
    static build(endpoint: string) {
        return ApiImpl.build(endpoint);
    }
}
