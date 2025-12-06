import { test, expect } from '@playwright/test';

test('unauthorized user cannot delete room via API', async ({ request }) => {

    const roomsResponse = await request.get('https://automationintesting.online/api/room');

    expect(
        roomsResponse.ok(),
        `rooms list status = ${roomsResponse.status()}`
    ).toBeTruthy();

    const body: any = await roomsResponse.json();

    expect(body).toHaveProperty('rooms');
    expect(Array.isArray(body.rooms)).toBeTruthy();
    expect(body.rooms.length).toBeGreaterThan(0);

    const roomId = body.rooms[0].roomid;


    const deleteResponse = await request.delete(
        `https://automationintesting.online/api/room/${roomId}`,
    );


    expect(deleteResponse.ok()).toBeFalsy();
});