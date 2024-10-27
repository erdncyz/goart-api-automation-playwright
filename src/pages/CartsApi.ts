import { APIRequestContext } from '@playwright/test';

export class CartsApi {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getCarts() {
    const response = await this.request.get('https://dummyjson.com/carts');
    return response;
  }
}
