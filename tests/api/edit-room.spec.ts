import { test, expect } from '@playwright/test';

test('unauthorized user cannot edit room via API', async ({ request }) => {
    const roomsResponse = await request.get('https://automationintesting.online/api/room');

    expect(
        roomsResponse.ok(),
        `rooms list status = ${roomsResponse.status()}`
    ).toBeTruthy();

    const body: any = await roomsResponse.json();

    expect(body).toHaveProperty('rooms');
    expect(Array.isArray(body.rooms)).toBeTruthy();
    expect(body.rooms.length).toBeGreaterThan(0);

    const room = body.rooms[0];
    const roomId = room.roomid;

    const editResponse = await request.put(
        `https://automationintesting.online/api/room/${roomId}`,
        {
            data: {
                roomName: 'Edited without auth',
                type: room.type,
                accessible: room.accessible,
                image: room.image,
                description: room.description,
                features: room.features,
                roomPrice: room.roomPrice,
                roomNumber: room.roomNumber,
            },
        }
    );


    expect(editResponse.ok()).toBeFalsy();
});