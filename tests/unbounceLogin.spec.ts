import { test, expect } from '../src/fixtures/pageFixtures';

test.describe('Unbounce Login', () => {

    test('Login to Unbounce with a normal account', async ({ page, unbounceLogin }) => {

        await test.step('Open Unbounce sign-in page', async () => {
            await unbounceLogin.loadURL('unbounce');
        });

        await test.step('Login with email and password', async () => {
            await unbounceLogin.loginWithCredentials(
                process.env.GOOGLE_TEST_EMAIL!,
                process.env.GOOGLE_TEST_PASSWORD!
            );
        });

        await test.step('Verify login was successful', async () => {
            await expect(page).not.toHaveURL(/\/users\/sign_in/);
        });
    });

});
