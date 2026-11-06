import { test, expect } from '@playwright/test';

test('create and check an issue via GitHub API', async ({ request }) => {
  // Отправляем POST-запрос через встроенный фикстурный объект request 
  const newIssue = await request.post('https://api.github.com/repos/octocat/Hello-World/issues', {
    data: {
      title: 'Automated issue with Playwright',
    },
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`
    }
  });

  // Проверяем статус ответа
  expect(
    newIssue.ok(),
    `GitHub API returned ${newIssue.status()}: ${await newIssue.text()}`
  ).toBeTruthy();
  expect(newIssue.status()).toBe(201);

  const responseBody = await newIssue.json();
  expect(responseBody.title).toBe('Automated issue with Playwright');
});