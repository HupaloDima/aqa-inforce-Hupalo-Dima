import { test, expect } from '@playwright/test';

test('public rooms API returns list of rooms', async ({ request }) => {
    const response = await request.get('https://automationintesting.online/api/room');

    expect(
        response.ok(),
        `status = ${response.status()}`
    ).toBeTruthy();

    const body: any = await response.json();

    expect(body).toHaveProperty('rooms');
    expect(Array.isArray(body.rooms)).toBeTruthy();
    expect(body.rooms.length).toBeGreaterThan(0);
});