
import { test, expect } from '@playwright/test';
import { LaunchBrowser } from '../../Utils/Launchbrowser/LaunchBrowser';
import { login } from '../../src/Elements/Elements';
import { clientsettings } from '../../src/Elements/clientsettings';
import { sidemenu } from '../../src/Elements/SideMenu';
import { topicCard } from '../../src/Elements/topicCard';

const browserlaunch = new LaunchBrowser();  
browserlaunch.browsersetup(); // 🔥 registers beforeEach & afterEach

test('AppliedDateVisibile', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForLoadState('networkidle');

  await page.locator(topicCard.selectDateField).click();
  await page.locator("(//div[text()='9']/following-sibling::div)[3]").click();
  await page.locator("(//div[text()='23']/following-sibling::div)[3]").click();
  await page.locator(topicCard.ApplyfilterBtn).click();
  await page.waitForTimeout(3000);

const isDateRangeVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

expect(isDateRangeVisible).toBe(true);

});

//After applied whether it shows result based on applied filter

test('Based on applied filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.locator(topicCard.selectDateField).click();
  await page.locator("(//div[text()='9']/following-sibling::div)[3]").click();
  await page.locator("(//div[text()='23']/following-sibling::div)[3]").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

  await page.waitForTimeout(3000);

  const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }

});

//No result found

test('No result found', async ({page}) => {
 
  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("(//div[text()='2']/following-sibling::div)[3]").click();
  await page.locator("(//div[text()='6']/following-sibling::div)[3]").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

  const NoResult = await page
  .locator(topicCard.NoResult).innerText();

expect(NoResult).toBe("No results match the selected date range");

});

//Apply today date filter
test('Apply today date filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("(//div[@class='_range_15g20_228'])[2]").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

  await page.waitForTimeout(3000);


const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }

});

//Apply yesterday date filter
test('Apply yesterday date filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("(//div[@class='_range_15g20_228']/following-sibling::div)[2]").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

await page.waitForTimeout(3000);


const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }
});

//Apply last 7 days filter
test('Apply last 7 days filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("//strong[normalize-space(text())='Last 7 Days']").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

  await page.waitForTimeout(3000);

   const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }

});

//Apply last 30 days filter
test('Apply last 30 days filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("//strong[normalize-space(text())='Last 30 Days']").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

  await page.waitForTimeout(3000);


   const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }


});

//Apply last month filter
test('Apply last month filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("//strong[normalize-space(text())='Last Month']").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

 await page.waitForTimeout(3000);


const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }
 });

//Apply last quarter filter
test('Apply last quarter filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("//strong[normalize-space(text())='Last Quarter']").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

await page.waitForTimeout(5000);


const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }

});

//Apply last year filter
test('Apply last year filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("//strong[text()='Last Year']/following-sibling::p").click();
  await page.locator(topicCard.ApplyfilterBtn).click();


await page.waitForTimeout(3000);


const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");
 }

});

//Apply this year filter
test('Apply this year filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("//strong[normalize-space(text())='This Year']").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

await page.waitForTimeout(3000);


const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }

});

//Apply next year filter
test('Apply next year filter', async ({page}) => {

  await page.locator(sidemenu.clientSettings).click();
  await page.locator(clientsettings.topicCard).click();
  await page.waitForTimeout(3000);

  await page.locator(topicCard.selectDateField).click();
  await page.locator("//strong[normalize-space(text())='Next Year']").click();
  await page.locator(topicCard.ApplyfilterBtn).click();

await page.waitForTimeout(3000);


const isTopicVisible: boolean = await page
  .locator(topicCard.Result)
  .isVisible();

  if (isTopicVisible) {

    expect(isTopicVisible).toBe(true);
 }
 else{
  const NoResult = await page
  .locator(topicCard.NoResult).innerText();
expect(NoResult).toBe("No results match the selected date range");

 }
});
