import { test, expect } from "@playwright/test";
import { OrgLoginPage } from "../pages/OrgLoginPage";

test.describe('Dashboard Tests', () => {
    let loginPage: OrgLoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new OrgLoginPage(page);
        await loginPage.goto();
        
        await loginPage.openLoginDropdown();
        await loginPage.selectOrganizationLogin();
        await loginPage.login('noreply-dev+yes@enumverse.com', 'Sunday@222');
        await loginPage.loginButton.click();
        
        await page.waitForURL('https://educator.dev.enumverse.com/admin/dashboard');
    });

    test.afterAll(async ({ page }) => {
        await page.close();
    });

    test('should display dashboard welcome message', async () => {
        await expect(loginPage.dashboardElement).toBeVisible();
    });
});