//php -S 127.0.0.1:8000
// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Contact Us/);
});

test('send message successfully', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');

  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Email').fill('john.doe@example.com');
  await page.getByLabel('Message').fill('Hello, this is a test message');

  // Click the send message button.
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page).toHaveTitle(/Message sent/);

  // Expects page to have a heading with the name of Message sent.
  await expect(page.getByRole('heading', { name: 'Message sent' })).toBeVisible();
});

test('send message without name', async ({ page }) => {
  //TestCase is successful if the user is not able to send a message without filling the name field.
  await page.goto('http://127.0.0.1:8000/');

  await page.getByLabel('Email').fill('john.doe@example.com');
  await page.getByLabel('Message').fill('Hello, this is a test message');

  // Click the send message button.
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page).toHaveTitle(/Contact Us/);
});

test('send message without email', async ({ page }) => {
  //TestCase is successful if the user is not able to send a message without filling the email field.
  await page.goto('http://127.0.0.1:8000/');

  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Message').fill('Hello, this is a test message');

  // Click the send message button.
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page).toHaveTitle(/Contact Us/);
});

test('send message without message', async ({ page }) => {
  //TestCase is successful if the user is not able to send a message without filling the message field.
  await page.goto('http://127.0.0.1:8000/');

  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Email').fill('john.doe@example.com');

  // Click the send message button.
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page).toHaveTitle(/Contact Us/);
});
