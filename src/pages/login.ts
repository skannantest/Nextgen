import { expect } from '@playwright/test';
import { elements } from '../../src/Elements/Elements';
import { BasePage } from '../BaseFile/baseFile';

export class LoginPage extends BasePage {

    readonly fullName = elements.fullName;

     async loadURL(siteLink:string) {
        const url = await this.baseURLs(siteLink);
        await this.page.goto(url);

    }

    async enterFullName(name: string){
        await this.page.locator(this.fullName).fill(name);
        await expect(this.page.locator(this.fullName)).toHaveValue(name);
    }

}