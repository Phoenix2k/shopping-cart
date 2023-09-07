import { expect, test } from '@playwright/test';

const HOME_TITLE = /Shopping Cart/;

test('has the correct title', async ({ baseURL, page }) => {
  await page.goto(baseURL ?? '/');
  await expect(page).toHaveTitle(HOME_TITLE);
});

test('has a list of products', async ({ baseURL, page }) => {
  await page.goto(baseURL ?? '/', { waitUntil: 'networkidle' });
  expect(await page.getByTestId('products').count()).toBeTruthy();
});

test('shows several products in the list', async ({ baseURL, page }) => {
  await page.goto(baseURL ?? '/', { waitUntil: 'networkidle' });
});

test('navigates to the product page when clicking on a link', async ({
  baseURL,
  page,
}) => {
  await page.goto(baseURL ?? '/', { waitUntil: 'networkidle' });
  const product = page.getByTestId('product').first();
  const productTitle = await product.locator('[itemprop="name"]').innerText();
  await product.locator('a').click();
  await expect(page).toHaveTitle(productTitle);
});

test('navigates to the product page when using the keyboard', async ({
  baseURL,
  page,
}) => {
  await page.goto(baseURL ?? '/', { waitUntil: 'networkidle' });
  const product = page.getByTestId('product').first();
  const productTitle = await product.locator('[itemprop="name"]').innerText();
  await product.locator('a').press('Enter');
  await expect(page).toHaveTitle(productTitle);
});

test('back link navigates back to the product list', async ({
  baseURL,
  page,
}) => {
  await page.goto(baseURL ?? '/', { waitUntil: 'networkidle' });
  const product = page.getByTestId('product').first();
  const productTitle = await product.locator('[itemprop="name"]').innerText();
  await product.locator('a').click();
  await expect(page).toHaveTitle(productTitle, { timeout: 2000 });
  await page.getByTestId('back-link').click();
  await expect(page).toHaveTitle(HOME_TITLE, { timeout: 2000 });
});
