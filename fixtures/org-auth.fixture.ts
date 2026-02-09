import { test as base } from "@playwright/test";
import { OrgLoginPage } from "../pages/OrgLoginPage";
import { orgUser } from "../data/credentials";

type OrgFixtures = {
  orgLogin: OrgLoginPage;
};

export const test = base.extend<OrgFixtures>({
  orgLogin: async ({ page }, use) => {
    const orgLoginPage = new OrgLoginPage(page);

    // Navigate and initiate login
    await orgLoginPage.gotoHome();
    await orgLoginPage.clickLoginNav();
    
    // Select organization login type
    await orgLoginPage.selectOrganizationLogin();
    
    // Fill credentials and submit
    await orgLoginPage.fillEmail(orgUser.email);
    await orgLoginPage.fillPassword(orgUser.password);
    await orgLoginPage.submit();

    // Wait for successful login to dashboard
    await page.waitForURL("https://educator.dev.enumverse.com/admin/dashboard");

    // Provide the logged-in page object to the test
    await use(orgLoginPage);
  }
});

export { expect } from "@playwright/test";









// import { test as base } from "@playwright/test";
// import { OrgLoginPage } from "../pages/OrgLoginPage";
// import { orgUser } from "./credentials";

// type OrgFixtures = {
//   orgLogin: OrgLoginPage;
// };

// export const test = base.extend<OrgFixtures>({
//   orgLogin: async ({ page }, use) => {
//     const orgLoginPage = new OrgLoginPage(page);

//     await orgLoginPage.gotoHome();
//     await orgLoginPage.clickLoginNav();
//     await orgLoginPage.selectOrganizationLogin();
//     await orgLoginPage.fillEmail(orgUser.email);
//     await orgLoginPage.fillPassword(orgUser.password);
//     await orgLoginPage.submit();

//     await use(orgLoginPage);
//   }
// });

// export { expect } from "@playwright/test";
