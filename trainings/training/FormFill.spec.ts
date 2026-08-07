import { test, expect, Page } from '@playwright/test';


const gender = 'Other';
const course = ['Selenium WebDriver', 'Java', 'TestNG','DevOps','Functional Testing','Others'];

test.describe('Fill the form', () => {

test.beforeEach(async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/demo-site/');
  await page.waitForLoadState('networkidle');
});
  
test('Fill the form', async ({ page },testInfo) => {
      const attachStepScreenshot = async (name: string) => {
      const shot = await page.screenshot({ fullPage: true });
      await testInfo.attach(name, { body: shot, contentType: 'image/png' 
});
}; 
  await test.step('Fill the form', async () => {

    await page.locator('//input[@class="vfb-text  vfb-medium  required  "]').first().fill('Vinoth');
    await page.locator('//input[@class="vfb-text  vfb-medium  required  "]').last().fill('Kumar');
    //Gender
    await page.getByRole('radio', { name: gender}).click();
    //Course selection
    for(let i=0; i<course.length; i++){
    if(course[i] === 'DevOps'){
    await page.getByRole('checkbox', { name: course[i] }).uncheck();
    }
    else{
    await page.getByRole('checkbox', { name: course[i] }).check();
    }
    }

     await page.getByLabel('', { exact: true }).click();
     await page.getByRole('option', { name: 'Afghanistan' }).click();

     const uniqueMail = `vinoth-${new Date().getSeconds()}${Math.floor(Math.random() * 100)}@gmail.com`;
     await page.locator('#vfb-14').fill(uniqueMail);

     const ExampleNum = await page.locator("li[class='vfb-item vfb-item-secret'] span[class='vfb-span'] label").innerText();
     const SplitNum = ExampleNum.split(":");
     const num = SplitNum[1].trim();
     await page.locator("#vfb-3").fill(num);
     
     await page.locator('//input[@value="Submit"]').click();
     await expect(page.locator('#messageContainer')).toBeVisible();
    });
});
});

    