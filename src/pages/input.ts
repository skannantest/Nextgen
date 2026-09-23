import { expect } from '@playwright/test';
import { elements } from '../../src/Elements/Elements';
import { LoginPage } from './login';
import { BasePage } from '../BaseFile/baseFile';

export class DemoSite extends BasePage {

    readonly fullName = elements.fullName;
    readonly appendText = elements.appendTextField;
    readonly getText = elements.getTextField;
    readonly clearText = elements.clearTextField;
  
    async loadURL(siteLink:string) {
        const url = await this.baseURLs(siteLink);
        await this.page.goto(url);
    }

    async enterFullName(name: string){
        await this.page.locator(this.fullName).fill(name);
        await expect(this.page.locator(this.fullName)).toHaveValue(name);
    }

    async appendTextAndClickTab(){
        const append = this.page.locator(this.appendText);
        const initialValue = await append.inputValue();
        await append.click();
        await append.press('Meta+ArrowRight');
        await append.pressSequentially(' Person')
        await expect(append).toHaveValue(`${initialValue} Person`);
    }

    async getTextFromField() {
        const getField = this.page.locator(this.getText);
        await expect(getField).toBeVisible();
        const getValues = await getField.inputValue();
        console.log(getValues);
        expect(getValues).not.toBe('');
    }

    async clearTextFromfield(): Promise<LoginPage> {
        await this.page.locator(this.clearText).clear();
        await expect(this.page.locator(this.clearText)).toHaveValue('');
        return new LoginPage(this.page);
    }

}
