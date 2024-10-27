import { test, expect } from '@playwright/test';
import { ProductsApi } from '../src/pages/ProductsApi';

test('getAllProducts', async ({ request }) => {
  const productsApi = new ProductsApi(request);
  const response = await productsApi.getAllProducts(100);
  const responseBody = await response.json();

  expect(response.status()).toBe(200);

  expect(responseBody).not.toBeNull();

  expect(responseBody.products).not.toBeNull();
  expect(responseBody.total).not.toBeNull();
  expect(responseBody.skip).not.toBeNull();
  expect(responseBody.limit).not.toBeNull();
});
