import { test, expect, Page } from '@playwright/test';
import { elements } from '../../src/Elements/Elements';
import { baseClass } from '../BaseFile/baseFile';

export class login extends baseClass {

    readonly fullName = elements.fullName;
    readonly appendText = elements.appendTextField;
    readonly getText = elements.getTextField;
    readonly clearText = elements.clearTextField;

     async loadURL(siteLink:string) {
        const url = await this.baseURLs(siteLink);
        await this.page.goto(url);

    }

    async enterFullName(){
        await this.page.locator(this.fullName).fill('gowtham');
        await expect(this.page.locator(this.fullName)).toHaveValue('gowtham');
    }

}