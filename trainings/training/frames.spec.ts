import { test, expect} from '@playwright/test';

test.describe('Frames', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://letcode.in/frame');
    await page.waitForLoadState('networkidle');
  });

test('Frames', async ({ page }, testInfo) => {
    const attachStepScreenshot = async (name: string) => {
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, { body: shot, contentType: 'image/png' 
});
}; 

await test.step('Fill the form in frame', async () => {

    const frame = page.frameLocator('#firstFr');
    await frame.getByPlaceholder("Enter name").fill('Vinoth');
    await frame.getByPlaceholder("Enter email").fill('Kumar');
    //Inner Frame
    const innerFrame = frame.frameLocator("//iframe[@title='Inner Frame']");
    await innerFrame.getByPlaceholder("Enter email").fill('Vinoth@gmail.com');
    await page.waitForTimeout(3000);
    await attachStepScreenshot('Frames Screenshot');

    });
  });
});