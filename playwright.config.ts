import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config'; // variables that config in ENV file

export default defineConfig({
  testDir: './tests', 
  // test file that going to execute
  fullyParallel: true, 
  // Used to run multiple test parallely (two browser opens and run two test parallely)
  forbidOnly: !!process.env.CI, 
  // Not included in Jenkins when "only one test should run config there"
  retries: process.env.CI ? 2 : 1, 
  // workers - If test fails, it will run in jenkins and manual run as well
  workers: process.env.CI ? 2 : 1, 
  // workers - If test run, it will run in jenkins and manual run as well
  reporter: [['html'], ['list']], 
  // Report generation
  use: {
    baseURL: process.env.BASE_URL, // URL and login configuration in ENV file
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    headless: false,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }, //  Browser that wanna execute
   { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
 