import { request, expect, APIRequestContext } from '@playwright/test';

export async function getAdminContext(): Promise<APIRequestContext> {

    const adminContext = await request.newContext({
        baseURL: 'https://automationintesting.online',
        ignoreHTTPSErrors: true,
    });

    const loginResponse = await adminContext.post('/auth/login', {
        data: {
            username: 'admin',
            password: 'password',
        },
    });

    expect(
        loginResponse.ok(),
        `login status = ${loginResponse.status()}`
    ).toBeTruthy();

    return adminContext;
}