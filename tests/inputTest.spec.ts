import { test, expect, Page, TestInfo } from '@playwright/test';
import { demoSite } from '../src/pages/input';
import { login } from '../src/pages/login';


async function attachStepScreenshot(page: Page, testInfo : TestInfo , name : string){

      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, {
        body: shot,
        contentType: 'image/png'
      });
    }

test.describe('Form Filling', () => {

test('Fill the form @smoke', async ({page},testInfo ) =>{

   const form = new demoSite(page);

   await test.step('FullName, append and etc..', async()=>{
    
     await form.loadURL('demoSite');
     await form.enterFullName();
     await form.appendTextAndClickTab();
     await form.getTextFromField();
     const login = await form.clearTextFromfield(); // Stored the return value
     await attachStepScreenshot(page,testInfo,'Screenshot taken');

   await test.step('another method', async()=>{ // Used the stored return value here

     await login.enterFullName();
     await attachStepScreenshot(page,testInfo,'Screenshot taken');

   }); 
  });
});
});
