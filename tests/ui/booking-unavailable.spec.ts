import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationintesting.online/';

test('invalid room booking', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('link', { name: 'Book Now', exact: true }).click();

    const checkAvailability = page.getByRole('button', { name: 'Check Availability' });

    // натискаємо без вибраних дат
    await checkAvailability.click();

    const rooms = page.getByRole('link', { name: 'Book now' });

    // застосунок все одно показує доступні кімнати (нема валідації дат),
    // тому перевіряємо, що їх > 0
    await expect(rooms).toHaveCount(4);
});