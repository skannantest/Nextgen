import { test } from '../src/fixtures/pageFixtures';
import { LoginPage } from '../src/pages/login';
import { attachStepScreenshot } from '../src/utils/screenshot';

test.describe('Form Filling', () => {

  test('Fill the form', { tag: '@smoke' }, async ({ page, demoSite }, testInfo) => {

    let loginPage: LoginPage;

    await test.step('FullName, append and etc..', async () => {

      await demoSite.loadURL('demoSite');
      await demoSite.enterFullName('Kannan');
      await demoSite.appendTextAndClickTab();
      await demoSite.getTextFromField();
      loginPage = await demoSite.clearTextFromfield();
      await attachStepScreenshot(page, testInfo, 'After clearing field');
    });

    await test.step('Re-enter name via LoginPage', async () => { // Used the stored return value here

      await loginPage.enterFullName('gowtham');
      await attachStepScreenshot(page, testInfo, 'After re-entering name via LoginPage');
    });
  });
});
