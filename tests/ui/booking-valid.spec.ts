import { test, expect } from '@playwright/test';

const BASE_URL = 'https://automationintesting.online/';

test('valid room booking', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByRole('link', { name: 'Book Now', exact: true }).click();

    const checkAvailability = page.getByRole('button', { name: 'Check Availability' });
    await checkAvailability.click();

    const checkIn = page.getByRole('textbox').first();
    const checkOut = page.getByRole('textbox').nth(1);

    await checkIn.click();
    await checkOut.click();
    await page.getByRole('gridcell', { name: 'Choose Sunday, 7 December' }).click();

    await checkAvailability.click();

    await expect(page.getByRole('link', { name: 'Book now' }).first()).toBeVisible();
});