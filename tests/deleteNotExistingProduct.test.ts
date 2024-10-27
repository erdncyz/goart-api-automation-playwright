import { test, expect } from '@playwright/test';

test('deleteNotExistingProduct', async ({ request }) => {
  const product_id = 99999;
  const response = await request.delete(`https://dummyjson.com/products/${product_id}`);
  const responseBody = await response.json();

  expect(response.status()).toBe(404);

  expect(responseBody).not.toBeNull();

  expect(responseBody.message).toBe(`Product with id '${product_id}' not found`);
});
