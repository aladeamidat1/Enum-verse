import { Locator , Page } from "@playwright/test";

const url = 'https://dev.enumverse.com/'

export class OrgLoginPage{
    readonly page: Page;
    readonly loginNavButton: Locator;
    readonly organizationOption: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly dashboardElement: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginNavButton = page.getByRole('button', { name: 'Log in' })
        this.organizationOption = page.getByRole('menuitem', { name: 'as an organization' })
        this.emailInput = page.getByRole('textbox', { name: 'Email' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.locator('div').filter({ hasText: /^Log in$/ })
        this.dashboardElement = page.getByRole('heading', { name: 'Welcome back, okay' })
    }

    async goto() {
         await this.page.goto(url);
    }

    async openLoginDropdown() {
        await this.loginNavButton.click();
    }

    async selectOrganizationLogin() {
        await this.organizationOption.click();
    }
    
    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


    async gotoDashboard() {
         return this.page.goto('https://educator.dev.enumverse.com/admin/dashboard');
    }
    


    async isDashboardVisible() {
        return await this.dashboardElement.isVisible();
        
    }
    
  }    



// import { Page, Locator, expect } from '@playwright/test';

// export class SignupPage {
//   readonly page: Page;
//   readonly signupButton: Locator;
//   readonly individualOption: Locator;
//   readonly organizationOption: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.signupButton = page.getByRole('button', { name: 'Sign up' });
//     this.individualOption = page.getByRole('menuitem', { name: /as an individual/i });
//     this.organizationOption = page.getByRole('menuitem', { name: /as an organization/i });
//   }

//   async gotoHome() {
//     await this.page.goto('https://dev.enumverse.com');
//   }

//   async openSignupDropdown() {
//     await this.signupButton.click();
//   }

//   async assertSignupOptionsVisible() {
//     await expect(this.individualOption).toBeVisible();
//     await expect(this.organizationOption).toBeVisible();
//   }
//   async assertIndividualFlowOpened() {
//     await this.individualOption.click();

//     await expect(this.page).toHaveURL(/sign-up/);
//   }

//   async assertOrganizationPageOpens() {
//   await this.organizationOption.click();


//   await expect(this.page.getByText(/verify your email/i)).toBeVisible({ timeout: 20000 });

//   // await then(then.page.getByText(/organization/i));
//   }




//   import { Page, Locator, expect } from '@playwright/test';
// export class IndividualSignUpPage {
//     readonly page: Page;
//     readonly firstNameField: Locator;
//     readonly lastNameField: Locator;
//     readonly emailField: Locator;
//     readonly passwordField: Locator;
//     readonly termsCheckbox: Locator;
//     readonly signupButton: Locator;

//     constructor(page: Page) {
//         this.page = page;
//         this.firstNameField = page.getByRole('textbox', { name: 'First name' });
//         this.lastNameField = page.getByRole('textbox', { name: 'Last name' });
//         this.emailField = page.getByRole('textbox', { name: 'Email' });
//         this.passwordField = page.getByRole('textbox', { name: 'Password' });
//         this.termsCheckbox = page.locator('#terms');
//         this.signupButton = page.getByRole('button', { name: 'Sign up' })
//     }

//     async goto() {
//         await this.page.goto('https://dev.enumverse.com/sign-up');
//         // await expect(this.firstNameField).toBeVisible();
//     }

//     async fillForm(first: string, last: string, email: string, password: string) {
//         await this.firstNameField.fill(first);
//         await this.lastNameField.fill(last);
//         await this.emailField.fill(email);
//         await this.passwordField.fill(password);
//     }

//     async checkTerms() {
//         await this.termsCheckbox.check({ timeout: 30000 });
//     }

//     async expectSignupDisabled() {
//         await expect(this.signupButton).toBeDisabled();
//     }

//     async expectSignupEnabled() {
//         await expect(this.signupButton).toBeEnabled();
//     }

//     async submit() {
//         await this.signupButton.click();
//     }
// }









// import { Page } from "@playwright/test";
// import { LoginSelectors as S } from "../utils/selectors";
// import { waitForNetworkIdle } from "../utils/waits";


// export class OrgLoginPage {
//   constructor(private page: Page) {}

//   async gotoHome() {
//     await this.page.goto("https://dev.enumverse.com/");
//     await waitForNetworkIdle(this.page);
//   }

//   async clickLoginNav() {
//     await this.page
//       .getByRole(S.loginNavBtn.role, { name: S.loginNavBtn.name })
//       .click();
//   }

//   async selectOrganizationLogin() {
//     await this.page
//       .getByRole(S.orgMenuItem.role, { name: S.orgMenuItem.name })
//       .click();
//   }

//   async fillEmail(email: string) {
//     await this.page
//       .getByRole(S.emailInput.role, { name: S.emailInput.name })
//       .fill(email);
//   }

//   async fillPassword(password: string) {
//     await this.page
//       .getByRole(S.passwordInput.role, { name: S.passwordInput.name })
//       .fill(password);
//   }

//   async submit() {
//     // Try the most semantic approach first
//     try {
//       await this.page
//         .getByRole(S.submitBtn.role, { name: S.submitBtn.name })
//         .click();
//     } catch {
//       // Fallback to the div filter if role doesn't work
//       await this.page
//         .locator('div')
//         .filter({ hasText: /^Log in$/i })
//         .click();
//     }
//   }
// }






// import { Page } from "@playwright/test";
// import { LoginSelectors as S } from "../utils/selectors";
// import { waitForNetworkIdle } from "../utils/network";

// export class OrgLoginPage {
//   constructor(private page: Page) {}

//   async gotoHome() {
//     await this.page.goto("https://dev.enumverse.com/");
//     await waitForNetworkIdle(this.page);
//   }

//   async clickLoginNav() {
//     await this.page
//       .getByRole('button', { name: 'Log in' })
//       .click();
//   }

//   async selectOrganizationLogin() {
//     await this.page.getByRole(S.dropdown.role).click();
//     await this.page
//       .getByRole(S.orgOption.role, { name: S.orgOption.name })
//       .click();
//   }

//   async fillEmail(email: string) {
//     await this.page.getByLabel(S.emailInput.label).fill(email);
//   }

//   async fillPassword(password: string) {
//     await this.page.getByLabel(S.passwordInput.label).fill(password);
//   }

//   async submit() {
//     await this.page
//       .getByRole(S.submitBtn.role, { name: S.submitBtn.name })
//       .click();
//   }
// }





