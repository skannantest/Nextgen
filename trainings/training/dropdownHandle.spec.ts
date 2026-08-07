import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/drop-down/');
  await page.waitForLoadState('networkidle');
});
  
test('Handle dropdowns', async ({ page },testInfo) => {

    const attachStepScreenshot = async (name: string) => {
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, { body: shot, contentType: 'image/png' });
    };    

  await test.step('Handle dropdown 1st', async () => { 
     // Method 1 for handle dropdonw
  await page.getByLabel('Choose A City:').selectOption('LD')
  await page.waitForTimeout(2000)
  await expect(page.locator('//span[@id="select2-simpleDropdown-container"]')).toHaveText('London');
  await attachStepScreenshot('Handle dropdown 1st Screenshot');
});

  await test.step('Handle dropdown 2nd', async () => {
     // Method 2 for handle dropdonw
  await page.locator('#select2-simpleDropdown-container').click();
  await page.getByRole('option',{name: 'Chennai', exact: true}).click(); // Select Chennai from the dropdown
  await page.waitForTimeout(2000)
  await expect(page.locator('//span[@id="select2-simpleDropdown-container"]')).toHaveText('Chennai');
  await attachStepScreenshot('Handle dropdown 2nd Screenshot');

});
});