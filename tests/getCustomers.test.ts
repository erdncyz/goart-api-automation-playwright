import { test, expect } from '@playwright/test';

test('getCustomers', async ({ request }) => {
  const productResponse = await request.get('https://dummyjson.com/products?limit=100');
  const products = await productResponse.json();

  const laptops = products.products.filter((p: any) => p.category === 'laptops' && p.price < 1500.00);
  const laptopIds = laptops.map((p: any) => p.id);

  const cartsResponse = await request.get('https://dummyjson.com/carts');
  const carts = await cartsResponse.json();

  const userIds = carts.carts
    .filter((cart: any) => cart.products.some((p: any) => laptopIds.includes(p.id)))
    .map((cart: any) => cart.userId);
    
});
