import { test, expect, Page } from '@playwright/test';
import { elements } from '../../src/Elements/Elements';

test.describe('Login Validation', () => {

     const userName = ''
     const passWord = ''
     const loginBtn = ''

     test.beforeEach(async ({ page }) => {
      await page.goto('/'); // URL get from playwright.config.ts baseURL
      await page.waitForLoadState('networkidle');
    });

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Test Title: ${testInfo.title}`); 
    console.log(`Status: ${testInfo.status}`);
});

async function loginDetails(page: Page, username: string, password: string) {
     await page.locator(userName).fill(username);
     await page.locator(passWord).fill(password);
     await page.locator(loginBtn).click();
}

test('Valid and Invalid login details @regression', async ({page}, testInfo) => {

     // tags concept and comment for tag > npx playwright test -grep @regression

      const attachStepScreenshot = async (name: string) => {
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, { body: shot, contentType: 'image/png' });
    };    

await test.step('Invalid login details', async () => {
     
     await loginDetails(page, "locked_out_user","secret_sauce");
     await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
     await attachStepScreenshot('Invalid Login Screenshot');
});

await test.step('Valid login details', async ( ) => {

     await loginDetails(page, "standard_user","secret_sauce");
     await page.waitForTimeout(3000);
     await attachStepScreenshot('Valid Login Screenshot');
});
});

test('Add cart @smoke', async ({page}, testInfo) => {

     const attachStepScreenshot = async (name: string) => {
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, { body: shot, contentType: 'image/png' });
    };    

  await test.step('add item to card login details', async ( ) => {

  await loginDetails(page, "standard_user","secret_sauce");
  await page.waitForTimeout(3000);
  await page.locator("//button[@class='btn btn_primary btn_small btn_inventory ']").nth(1).click();
  await expect(page.locator('//span[@class="shopping_cart_badge"]')).toBeVisible();
  await attachStepScreenshot('Valid Login Screenshot');


});
});

});