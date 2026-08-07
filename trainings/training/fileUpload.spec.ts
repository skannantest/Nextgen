import { test, expect} from '@playwright/test';

test.describe('File upload', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.leafground.com/file.xhtml');
    await page.waitForLoadState('networkidle');
  });

test('File upload and download', async ({ page }, testInfo) => {

await test.step('File upload step', async () => {

    await page.locator('//input[@type="file"]').first().setInputFiles('/Users/novastrid/Downloads/download.jpeg');
    await page.waitForTimeout(3000);
    await page.locator('//input[@type="file"]').last().setInputFiles('/Users/novastrid/Downloads/download.jpeg');
    await page.waitForTimeout(3000);
    await page.locator("//button[@type='button']").first().click()

});
await test.step('File Download step', async () => {

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("//button[@type='submit']").click()
    ]);
    const fileName = download.suggestedFilename();
    console.log(download.suggestedFilename());
    await download.saveAs(`/Users/novastrid/Downloads/${fileName}`);    
    await page.waitForTimeout(3000);
});
});
});
