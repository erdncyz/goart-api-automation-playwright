import { APIRequestContext } from '@playwright/test';

export class ProductsApi {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getAllProducts(limit: number = 100) {
    const response = await this.request.get(`https://dummyjson.com/products?limit=${limit}`);
    return response;
  }

  async addNewProduct(productData: any) {
    const response = await this.request.post('https://dummyjson.com/products/add', {
      data: productData,
    });
    return response;
  }

  async deleteProduct(productId: number) {
    const response = await this.request.delete(`https://dummyjson.com/products/${productId}`);
    return response;
  }
}
