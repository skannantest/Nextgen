import { test, expect, TestInfo, Page } from '@playwright/test';

async function attachStepScreenshot(page: Page, testInfo : TestInfo , name : string){

      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, {
        body: shot,
        contentType: 'image/png'
      });
    }

test.describe('Frames', () => {

    test.beforeEach(async ({ page }, testInfo) => {

      await page.goto(`https://letcode.in/${testInfo.title}`);
      await page.waitForLoadState('networkidle');
  });

  test('frame', async ({ page }, testInfo) => {

    await test.step('Fill the form in frame', async () => {

      const frame = page.frameLocator('#firstFr');
      await frame.getByPlaceholder('Enter name').fill('Vinoth');
      await frame.getByPlaceholder('Enter email').fill('Kumar');

      const innerFrame = frame.frameLocator("//iframe[@title='Inner Frame']");
      await innerFrame.getByPlaceholder('Enter email').fill('Vinoth@gmail.com');
      await page.waitForTimeout(3000);
      await attachStepScreenshot(page,testInfo,'Frame works fine');
    });
  });

  test('alert', async ({ page }, testInfo) => {

    await test.step('Simple dialog handle', async () => {

      page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
      });
      await page.locator('#accept').click();
      await attachStepScreenshot(page,testInfo,'Simple works fine');
    });

    await test.step('Confirm dialog handle', async () => {

      page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
      });
      await page.locator('#confirm').click();
      await attachStepScreenshot(page,testInfo,'Confirm works fine');
    });

    await test.step('Prompt dialog handle', async () => {

      page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Kannan');
      });
      await page.locator('#prompt').click();
      await attachStepScreenshot(page,testInfo,'prompt works fine');
    });

    await test.step('Modern dialog handle', async () => {

      await page.locator('#modern').click();
      const getText = await page.locator('//div[@class="card-content"]').innerText();
      console.log(getText);
      await page.locator('//button[@aria-label="close"]').click();
      await attachStepScreenshot(page,testInfo,'Modern works fine');
    });
  });

  test('file', async ({ page }, testInfo) => {
   
    await test.step('File upload step', async () => {

      await page.locator('//input[@type="file"]')
        .setInputFiles('/Users/novastrid/Downloads/download.jpeg');
      await page.waitForTimeout(3000);
      await attachStepScreenshot(page,testInfo,'File upload works fine');
    });

    await test.step('File Download step', async () => {

      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#xls').click()
      ]);

      const fileName = download.suggestedFilename();
      console.log(fileName);
      await download.saveAs(`/Users/novastrid/Downloads/${fileName}`);
      await page.waitForTimeout(3000);
      await attachStepScreenshot(page,testInfo,'File download works fine');
    });
  });
});