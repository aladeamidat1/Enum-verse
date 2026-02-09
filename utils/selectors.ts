export const LoginSelectors = {
  // Navigation button on homepage
  loginNavBtn: {
    role: "button" as const,
    name: "Log in"
  },

  // Menu item to select organization login type
  orgMenuItem: {
    role: "menuitem" as const,
    name: "As an organization"
  },

  // Login form inputs
  emailInput: {
    role: "textbox" as const,
    name: "Email"
  },

  passwordInput: {
    role: "textbox" as const,
    name: "Password"
  },

  // Submit button (we have multiple options here)
  submitBtn: {
    // Option 1: Try to find by role first (most reliable)
    role: "button" as const,
    name: /log in|sign in/i
    
    // Option 2: If above doesn't work, use this in your page object:
    // page.locator('button:has-text("Log in")')
    
    // Option 3: Current (least reliable but works):
    // page.locator('div').filter({ hasText: /^Log in$/ })
  }
};