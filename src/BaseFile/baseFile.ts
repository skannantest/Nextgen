import { test, expect, Page } from '@playwright/test';

// Fixtures used to have Page, Browser, context, Request(API)

export class baseClass {

    page: Page; 

    constructor(page: Page){
    this.page = page;
    }

    async baseURLs(url: string): Promise<string> {
    if (url === 'demoSite') {
        return "https://letcode.in/edit?utm_source=chatgpt.com";
    }
    if (url === 'ClientUAT') {
        return "https://uat-admin.expertevents.iqvia.com/";
    }
    throw new Error(`Invalid site name: ${url}`);
  }
  }
 
