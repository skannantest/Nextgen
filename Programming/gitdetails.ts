/*name: Playwright Tests  // this is just name for the file, not mandatory.
env:
    VALID_USERNAME: ${{ secrets.VALID_USER }}
    VALID_PASSWORD: ${{ secrets.VALID_PASS }}
    INVALID_USERNAME: ${{ secrets.INVALID_USER }}
    INVALID_PASSWORD: ${{ secrets.INVALID_PASS }} 
    
on:
  workflow_dispatch: // Run only when manully triggered the run workflow
jobs:
  test: // this name can be anything, it is just a name for the job
    timeout-minutes: 60
    runs-on: ubuntu-latest // which OS you want to run the test, it can be windows or mac as well
    steps:
    - uses: actions/checkout@v4 // its download the code from the repo to the runner machine
    - uses: actions/setup-node@v4 // its install the node in the runner machine
      with:
        node-version: lts/*
    - name: Install dependencies // name can be anything, it is just a name for the step
      run: npm ci // install the dependencies from package.json file
    - name: Install Playwright Browsers // name can be anything, it is just a name for the step
      run: npx playwright install --with-deps // install the browsers that we want to run the test
    - name: Run Playwright tests // name can be anything, it is just a name for the step
      run: npx playwright test tests/inputTest.spec.ts // run the test file that we want to run, it can be any test file or folder
    - uses: actions/upload-artifact@v4 // 
      if: ${{ !cancelled() }} // upload the report only if the workflow is not cancelled, if it is cancelled, it will not upload the report
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 10 // automatically delete the report after 10 days, you can change it to any number of days you want

 
*/