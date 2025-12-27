import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/');
  await page.locator('.cls-selenium_ide').first().click();
  await expect(page.getByRole('button', { name: 'About' })).toBeVisible();
});