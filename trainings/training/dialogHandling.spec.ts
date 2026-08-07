import { test, expect} from '@playwright/test';

test.describe('Frames', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://letcode.in/alert');
    await page.waitForLoadState('networkidle');
  });

test('dialog', async ({ page }, testInfo) => {

    const attachStepScreenshot = async (name: string) => {
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, { body: shot, contentType: 'image/png' 
});
}; 

await test.step('Simple dialog handle', async () => {

    await page.once('dialog', async dialog => {
      console.log(dialog.message());
      dialog.accept();
    });
    await page.locator('#accept').click();
    await attachStepScreenshot('accept Dialog works fine');
  });

  await test.step('Confirm dialog handle', async () => {

    await page.once('dialog', async dialog => {
      console.log(dialog.message());
      dialog.dismiss();
    });
    await page.locator('#confirm').click();
    await attachStepScreenshot('confirm Dialog works fine');
  });

  await test.step('Prompt dialog handle', async () => {

    await page.once('dialog', async dialog => {
      console.log(dialog.message());
      dialog.accept('Kannan');
    });
    await page.locator('#prompt').click();
    await attachStepScreenshot('Prompt Dialog works fine');
  });

  await test.step('Modern dialog handle', async () => {

    await page.locator('#modern').click();
    await page.waitForTimeout(3000);
    const getText = await page.locator('//div[@class="card-content"]').innerText();
    console.log(getText);
    await page.locator('//button[@aria-label="close"]').click();
    await attachStepScreenshot('Modern Dialog works fine');
  });
  });
});