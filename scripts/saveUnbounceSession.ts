import { chromium } from '@playwright/test';
import 'dotenv/config';
import path from 'path';

const AUTH_FILE = path.join(__dirname, '..', '.auth', 'unbounceState.json');

// Logs in manually (you complete reCAPTCHA/2FA yourself) and saves the
// authenticated session so tests can reuse it instead of scripting the login form.
async function saveUnbounceSession() {
    const browser = await chromium.launch({ channel: 'chrome', headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://app.unbounce.com/');

    console.log('A browser window has opened. Please log in manually (email/password or Google, complete any reCAPTCHA/2FA).');
    console.log('Waiting up to 5 minutes for login to complete...');

    await page.waitForURL(url => !url.pathname.includes('/users/sign_in'), { timeout: 5 * 60 * 1000 });

    await context.storageState({ path: AUTH_FILE });
    console.log(`Login detected. Session saved to ${AUTH_FILE}`);

    await browser.close();
}

saveUnbounceSession();
