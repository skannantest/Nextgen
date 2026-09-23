import { Page, TestInfo } from '@playwright/test';

export async function attachStepScreenshot(page: Page, testInfo: TestInfo, name: string) {
  const shot = await page.screenshot({ fullPage: true });
  await testInfo.attach(name, {
    body: shot,
    contentType: 'image/png'
  });
}
