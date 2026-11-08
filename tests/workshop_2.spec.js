import {test, expect} from '@playwright/test';

test.skip('Automating Form Submissions', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('Buy milk');
    await newTodo.press('Enter');

    await newTodo.fill('Buy bread');
    await newTodo.press('Enter');

    await newTodo.fill('Learn GitHub Copilot');
    await newTodo.press('Enter');

    await page.waitForTimeout(1000); // Wait for 1 second to allow the page to load completely

    const firstTodo = page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();
    await expect(firstTodo).toHaveClass(/completed/);

    const secondTodo = page.getByTestId('todo-item').nth(1);
    await expect(secondTodo).not.toHaveClass(/completed/); // Verify that the second todo is not marked as completed
    await secondTodo.getByRole('checkbox').check();
    await expect(secondTodo).toHaveClass(/completed/);

    const thirdTodo = page.getByTestId('todo-item').nth(2);
    await expect(thirdTodo).not.toHaveClass(/completed/); // Verify that the third todo is not marked as completed    
    await thirdTodo.getByRole('checkbox').check();
    await expect(thirdTodo).toHaveClass(/completed/);

    await page.waitForTimeout(1000); // Wait for 1 second to allow the page to load completely

});

test('Handling Form', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    const placeholder = '[placeholder="What needs to be done?"]';
    await page.fill(placeholder, 'Buy milk');
    await page.locator(placeholder).press('Enter');

    const checkbox = page.locator('.toggle');
    await checkbox.check();

    await page.waitForTimeout(1000);
});