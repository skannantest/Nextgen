import { Page } from '@playwright/test';

// Fixtures used to have Page, Browser, context, Request(API)

export class BasePage {

    page: Page; 

    constructor(page: Page) {
    this.page = page;
    }

    

    async baseURLs(url: string): Promise<string> {
    if (url === 'demoSite') {
        return "https://letcode.in/edit?utm_source=chatgpt.com";
    }
    if (url === 'ClientUAT') {
        return "https://uat-admin.expertevents.iqvia.com/";
    }
    if (url === 'unbounce') {
        return "https://app.unbounce.com/";
    }
    throw new Error(`Invalid site name: ${url}`);
  }
  }
 
