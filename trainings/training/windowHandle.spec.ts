import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/multiple-windows/');
  await page.waitForLoadState('networkidle');
});
  
test('Handle window', async ({ page },testInfo) => {

     const attachStepScreenshot = async ( name: string) => {
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, { body: shot, contentType: 'image/png' });
    };    
    await test.step('Handle window', async () => {

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            page.getByText('New Browser Window').click()
        ]);
        await newPage.waitForLoadState('networkidle');
        await newPage.bringToFront(); // swtich to New window
        await expect(newPage).toHaveTitle('Demo Site – WebTable – Vinoth Tech Solutions');
        await attachStepScreenshot('Handle window Screenshot');
    });
        
});
