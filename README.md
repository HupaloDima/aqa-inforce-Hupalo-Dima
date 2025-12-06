This project contains automated UI and API tests for the website https://automationintesting.online, written with Playwright and TypeScript.

UI tests are in `tests/ui`, API tests are in `tests/api`. Manual test cases for the UI flows are described in `test-cases.txt` in the project root.

To run the project:
1. Install dependencies: `npm install`
2. Run all tests: `npx playwright test`
3. UI only: `npx playwright test ui`
4. API only: `npx playwright test api`

Note: according to the task description, API tests should cover admin flows (create, edit, delete room via admin API). At the moment the admin login endpoint returns 404, so I implemented:
- a positive public rooms API check;
- negative API tests that verify unauthorized users cannot create, edit or delete rooms.

The structure of the tests allows to extend them easily once a working admin API is available.