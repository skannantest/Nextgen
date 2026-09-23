import { test as base } from '@playwright/test';
import { DemoSite } from '../pages/input';
import { UnbounceLoginPage } from '../pages/unbounceLogin';

type PageFixtures = {
  demoSite: DemoSite;
  unbounceLogin: UnbounceLoginPage;
};

export const test = base.extend<PageFixtures>({
  demoSite: async ({ page }, use) => {
    await use(new DemoSite(page));
  },

  unbounceLogin: async ({ page }, use) => {
    await use(new UnbounceLoginPage(page));
  },
});

export { expect } from '@playwright/test';
