import { test } from '@playwright/test';

test.describe('scroll', ()=>{

    test('scrolling', async({page})=>{

    await test.step('scrolling', async()=>{

        await page.goto('https://letcode.in/');

        await page.waitForLoadState('networkidle');
        await page.locator("//div[@class='space-y-4']").last().scrollIntoViewIfNeeded();
        await page.waitForTimeout(3000);
    });
    });

    

});