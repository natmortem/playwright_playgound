import {test} from '@playwright/test';

test.skip('Basic navigation', async ({ page }) => {
    await page.goto('https://about.gitlab.com/');
    await page.waitForTimeout(3000); // Wait for 3 seconds to allow the page to load completely
    await page.reload();
});

test.skip('Interacting with Web Elements', async ({ page }) => {
    // npx playwright test second_test.spec.js --project chromium --headed

    await page.goto('https://about.gitlab.com/');
    await page.click('#onetrust-accept-btn-handler'); // Click the "Accept All Cookies" button'

    await page.locator('.navigation__actions').getByRole('link', {name: 'Get free trial'}).click();
    // await page.locator('[data-testid="new-user-first-name-field"]').fill('John');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Snow');

    await page.getByTestId('new-user-first-name-field').fill('John');
    await page.getByTestId('new-user-last-name-field').fill('Snow');
});

test('Using Various Locators Methods', async ({ page }) => {
    await page.goto('https://about.gitlab.com/');
    await page.click('#onetrust-accept-btn-handler'); // Click the "Accept All Cookies" button'

    // await page.getByRole('link', {name: 'Sign in'}).click();

    await page.click(':has-text("Sign in")');
    await page.waitForTimeout(3000); // Wait for 3 seconds to allow the page to load completely
});