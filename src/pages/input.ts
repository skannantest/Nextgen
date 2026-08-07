import { test, expect, Page } from '@playwright/test';
import { elements } from '../../src/Elements/Elements';
import { login } from './login';
import { baseClass } from '../BaseFile/baseFile';

export class demoSite extends baseClass{

    readonly fullName = elements.fullName;
    readonly appendText = elements.appendTextField;
    readonly getText = elements.getTextField;
    readonly clearText = elements.clearTextField;
  
    async loadURL(siteLink:string) {
        const url = await this.baseURLs(siteLink);
        await this.page.goto(url);
    }

    async enterFullName(){
        await this.page.locator(this.fullName).fill('Kannan');
        await expect(this.page.locator(this.fullName)).toHaveValue('Kannan');
    }

    async appendTextAndClickTab(){
        const append = await this.page.locator(this.appendText);
        await append.click();
        await append.press('Meta+ArrowRight');
        await append.pressSequentially(' Person')
        const value= await append.inputValue();
        await expect(this.page.locator(this.appendText)).toHaveValue(value);
    }

    async getTextFromField(){
        await this.page.waitForTimeout(3000);
        const getValues = await this.page.locator(this.getText).inputValue();
        console.log(getValues);
        await expect(this.page.locator(this.getText)).toHaveValue(getValues);
    }

    async clearTextFromfield():Promise<login>{
        await this.page.locator(this.clearText).clear();
        await expect(this.page.locator(this.clearText)).toHaveValue('');
        return new login(this.page);
    }

}
