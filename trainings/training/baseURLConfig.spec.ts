import { test, expect } from '@playwright/test';

test.describe('Login Validation', () => {

    test('Login with base URL configure in config file', async({page})=>{

     await page.goto('/');
     await page.locator('#user-name').fill(process.env.TEST_USER!);
     await page.locator('#password').fill(process.env.TEST_PASS!);
     await page.locator('#login-button').click();
    });

    test('InvalidLogin with base URL configure in config file', async({page})=>{

     await page.goto('/');
     await page.locator('#user-name').fill(process.env.TEST_USER!);
     await page.locator('#password').fill(process.env.TEST_PASS!);
     await page.locator('#login-button').click();
    });

});