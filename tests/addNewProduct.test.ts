import { test, expect } from '@playwright/test';

test('addNewProduct', async ({ request }) => {
  const newProduct = {
    title: "iPhone 15",
    description: "An apple mobile which is nothing like apple",
    price: 1500,
    rating: 4.69,
    stock: 200
  };

  const response = await request.post('https://dummyjson.com/products/add', {
    data: newProduct
  });
  const responseBody = await response.json();

  expect(response.status()).toBe(201);

  expect(responseBody).not.toBeNull();

  expect(responseBody.title).toBe(newProduct.title);
  expect(responseBody.description).toBe(newProduct.description);
  expect(responseBody.price).toBe(newProduct.price);
  expect(responseBody.rating).toBe(newProduct.rating);
  expect(responseBody.stock).toBe(newProduct.stock);
});
