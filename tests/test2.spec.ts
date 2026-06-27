/* ¿Que es un fixture?, es page, request, browser, son clases o modulos que ayudan a generar las pruebas */

import { test, expect } from '@playwright/test';
/*
  Para que al momento de ejecutar tome un driver especifico para la ejecución
  const browser = await chromium.launch({
  executablePath: "C:\Program Files\Google\Chrome\Application",
  headless: false
}) */


/* ¿Que es el async?  */
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// AAA
test('get started link', async ({ page }) => {
  // Arrange
  await page.goto('https://playwright.dev/');

  // Act
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  
  // Assert
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
