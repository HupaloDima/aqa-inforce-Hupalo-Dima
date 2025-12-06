import { test, expect } from '@playwright/test';

test('unauthorized user cannot create room via API', async ({ request }) => {
    const response = await request.post('https://automationintesting.online/api/room', {
        data: {
            roomName: 'Unauthorized Room',
            type: 'Single',
            accessible: true,
            image: 'https://example.com/img.jpg',
            description: 'Should not be created without auth',
            features: ['WiFi'],
            roomPrice: 100,
            roomNumber: 999,
        },
    });

    expect(response.ok()).toBeFalsy();
});