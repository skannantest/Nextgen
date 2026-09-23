import { test, expect, Page } from '@playwright/test';

test.describe('Login Validation', () => {

    test('Login with base URL configure in config file @asnjkd', async({page})=>{

     await page.goto('/');
     await page.locator('#user-name').fill('kannan');
     await page.locator('#password').fill(process.env.VALID_PASS!);
     await page.locator('#login-button').click();

    });

    test('Invalid Login with base URL configure in config file @dasbsk', async({page})=>{

     await page.goto('/');
     await page.locator('#user-name').fill(process.env.INVALID_USER!);
     await page.locator('#password').fill(process.env.INVALID_PASS!);
     await page.locator('#login-button').click();
     await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});
});