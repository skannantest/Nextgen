import { test, expect } from '@playwright/test';

test.describe('Login Validation', () => {

    test('Login with base URL configure in config file', async({page})=>{

     await page.goto('/');
     await page.locator('#user-name').fill(process.env.VALID_USER!);
     await page.locator('#password').fill(process.env.VALID_PASS!);
     await page.locator('#login-button').click();
     
     const productCount = await page.locator('//div[@data-test="inventory-item-name"]').count();
        
     console.log(`Product Count: ${productCount}`);

        for (let i = 0; i < productCount; i++) {
            
            await page.locator('//div[@data-test="inventory-item-name"]').nth(i).click();
            await page.waitForTimeout(2000);
            await page.goBack();
        /*   let [newPage] = await Promise.all([
                page.context().waitForEvent('page'), 
            ]);
            await newPage.bringToFront();
            await newPage.locator('[data-test="back-to-products"]').click()
            await newPage.close();*/
        }
    });
    });