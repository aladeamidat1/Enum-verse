import { test, expect } from "@playwright/test";
import { OrgLoginPage } from "../pages/OrgLoginPage";



test.describe('Login Tests', () => {
    let loginPage: OrgLoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new OrgLoginPage(page);
        await loginPage.goto();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('should login successfully as an organization', async () => {
        await loginPage.openLoginDropdown();
        await loginPage.selectOrganizationLogin();
        await loginPage.login('noreply-dev+yes@enumverse.com', 'Sunday@222');
        await loginPage.loginButton.click();

      
      
        
        //await expect(loginPage.dashboardElement).toBeVisible();
    });
});







// test.describe("Organization Login", () => {
//   let orgLoginPage: OrgLoginPage;

//   // -------- SETUP --------
//   test.beforeEach(async ({ page }) => {
//     orgLoginPage = new OrgLoginPage(page);
//     await orgLoginPage.gotoHome();
//     await orgLoginPage.clickLoginNav();
//   });

//   // -------- TEARDOWN --------
//   test.afterEach(async ({ page }) => {
//     await page.context().clearCookies();
//     await page.context().clearPermissions();
//   });

//   test("should log in as organization user", async ({ page }) => {
//     // ASSERT: Verify we're on organization login page
//     await expect(page).toHaveURL("https://dev.enumverse.com/login/organization");

//     // ACT: Select organization login type
//     await orgLoginPage.selectOrganizationLogin();

//     // ACT: Fill in credentials
//     await orgLoginPage.fillEmail(orgUser.email);
//     await orgLoginPage.fillPassword(orgUser.password);

//     // ACT: Submit the form
//     await orgLoginPage.submit();

//     // ASSERT: Verify successful login to dashboard
//     //await expect(page).toHaveURL("https://educator.dev.enumverse.com/admin/dashboard");
//   });
// });




















// import { test, expect } from '@playwright/test';
// import { IndividualSignUpPage } from '../pages/individualSignUpPage';


// test('successful individual signup redirects to OTP verification page', async ({ page }) => {
//     test.setTimeout(70000);
//     const signup = new IndividualSignUpPage(page);

//     await signup.goto();

//     await signup.fillForm(
//         'Amidat',
//         'Ayomide',
//         `morenikeji787898@gmail.com`,
//         'modupeoluwa@123'
//     );

//     await signup.checkTerms();
//     await signup.expectSignupEnabled();

//     await signup.submit();







// import { test, expect } from "@playwright/test";
// import { OrgLoginPage } from "../pages/OrgLoginPage";
// import { orgUser } from "../data/credentials";

// test.describe("Organization Login", () => {
//   let orgLoginPage: OrgLoginPage;

//   // -------- SETUP (runs before EVERY test in this file) --------
//   test.beforeEach(async ({ page }) => {
//     orgLoginPage = new OrgLoginPage(page);

//     await orgLoginPage.gotoHome();
//     await orgLoginPage.clickLoginNav();
//   });

//   // -------- TEARDOWN (runs after EVERY test in this file) --------
//   test.afterEach(async ({ page }) => {
//     // Common teardown actions you might need later:
//     await page.context().clearCookies();
//     await page.context().clearPermissions();
//   });

//   test("should log in as organization user", async ({ page }) => {

//     // ASSERT we are on login page (setup already brought us here)
//     await expect(page).toHaveURL(/login/i);

//     // Select organization
//     await orgLoginPage.selectOrganizationLogin();

//     const selectedOrg = page.getByText(/organization/i);
//     await expect(selectedOrg).toBeVisible();

//     // Fill credentials
//     await orgLoginPage.fillEmail(orgUser.email);
//     await orgLoginPage.fillPassword(orgUser.password);

//     // Submit
//     await orgLoginPage.submit();

//     // Final assertion
//     await expect(page).toHaveURL(/org|dashboard|workspace/i);
//   });
// });
 











// // import{test, expect} from '@playwright/test';
// // import { LoginPage } from '../pages/org_loginPage';


// // test.describe('Login Tests', () => {
// //     let loginPage: LoginPage;

// //     test.beforeEach(async ({ page }) => {
// //         loginPage = new LoginPage(page);
// //         await loginPage.goto();
// //     });

// //     test('should login successfully with valid credentials', async () => {
// //          await expect(loginPage.page).toHaveURL('https://dev.enumverse.com/login/organization');
// //         await loginPage.login('noreply-dev+yes@enumverse.com', 'Sunday@222');
// //         await loginPage.loginButton.click();
// //         const currentUrl = await loginPage.getCurrentUrl();
// //         expect(currentUrl).not.toContain('login');

// //         const isDashboardVisible = await loginPage.isDashboardVisible();
// //         expect(isDashboardVisible).toBeTruthy();
// //     });

// //     test.afterEach(async ({ page }) => {
// //         await page.close();
// //     }); 

// // });



// // test.describe('Dashboard Tests', () => {
// //   test.beforeEach(async ({ page }) => {
// //     // Navigate to dashboard before each test
// //     await page.goto('/dashboard');

// //     // Perform login
// //     await page.getByLabel('Email').fill('user@example.com');
// //     await page.getByLabel('Password').fill('password123');
// //     await page.getByRole('button', { name: 'Login' }).click();

// //     // Wait for navigation to complete
// //     await expect(page).toHaveURL(/.*dashboard/);
// //   });

// //   test.afterEach(async ({ page }) => {
// //     // Clean up after each test
// //     await page.getByRole('button', { name: 'Logout' }).click();
// //   });

// //   test('should display user profile', async ({ page }) => {
// //     await expect(page.getByRole('heading', { name: 'My Dashboard' })).toBeVisible();
// //   });
// // });