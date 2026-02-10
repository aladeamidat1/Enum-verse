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

        await page.waitForURL("https://educator.dev.enumverse.com/admin/dashboard");

    });

    test('should create a private event successfully', async ({ page }) => {
        const createEventPage = new CreateEventPage(page);
        await createEventPage.goto();
        await createEventPage.openCalender();
        await createEventPage.openCreateEvent();
        await createEventPage.enterEventName('Realtors Networking');
        await createEventPage.selectEventVisibilityPrivate();
        await createEventPage.enterEventDescription('A networking event for realtors to connect and share insights.');
        await createEventPage.enterEventStartDate('2023-09-20');
        await createEventPage.enterEventStartTime('10:00 AM');
        await createEventPage.enterEventEndDate('2023-09-21');
        await createEventPage.enterEventEndTime('11:00 AM');
        await createEventPage.enterEventLocation('Online');
        await createEventPage.submit();
    });
    
});