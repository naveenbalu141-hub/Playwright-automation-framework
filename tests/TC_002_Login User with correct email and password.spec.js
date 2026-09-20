import { launchBrowser,deleteUser } from '../utils/commonFunctions.js';
import { signUpLoginPage } from '../pages/signup/signUpLoginPage.js';
import { test, expect } from '@playwright/test';
import { customerDetailsPage } from '../pages/signup/customerDetailsPage.js';
test.use({
        storageState: {
            cookies: [],
            origins: []
        }});
test('Valid Username and Password',async({page})=>{
const signupsigninpage = new signUpLoginPage(page);
  const customerdetails = new customerDetailsPage(page);
await launchBrowser(page);
await expect(signupsigninpage.returnLoginToYourHeader()).toHaveText('Login to your account');
await page.waitForTimeout(5000);
await signupsigninpage.clickLogin('Naveen@123','Naveen');
await expect(customerdetails.returnLoggedInAsText()).toHaveText('Logged in as Naveen');
await customerdetails.clickDeleteBtn();
await expect(customerdetails.returnaccountDeletedText()).toHaveText('Account Deleted!');
})