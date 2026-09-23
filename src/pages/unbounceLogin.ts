import { expect } from '@playwright/test';
import { elements } from '../../src/Elements/Elements';
import { BasePage } from '../BaseFile/baseFile';

export class UnbounceLoginPage extends BasePage {


    readonly emailInput = elements.unbounceEmailInput;
    readonly passwordInput = elements.unbouncePasswordInput;
    readonly loginBtn = elements.unbounceLoginBtn;

    async loadURL(siteLink: string) {
        const url = await this.baseURLs(siteLink);
        await this.page.goto(url);
    }

    async loginWithCredentials(email: string, password: string) {
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}
