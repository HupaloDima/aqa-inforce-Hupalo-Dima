import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        baseURL: 'https://automationintesting.online',
        trace: 'on-first-retry',
    },
});