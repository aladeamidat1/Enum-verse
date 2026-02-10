import{test, expect} from '@playwright/test';
import { CreateEventPage } from '../pages/creatEventPage';
import { OrgLoginPage } from '../pages/OrgLoginPage';   


test.describe('Create Event', () => {
    test.beforeEach(async ({ page }) => {
        const 
        loginPage = new OrgLoginPage(page);
        await loginPage.goto();
        
        await loginPage.openLoginDropdown();
        await loginPage.selectOrganizationLogin();
        await loginPage.login('noreply-dev+yes@enumverse.com', 'Sunday@222');
        await loginPage.loginButton.click();

        await page.waitForURL = ("https://educator.dev.enumverse.com/admin/dashboard");
        
    });
});