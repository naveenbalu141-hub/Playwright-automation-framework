import { signUpLoginPage } from "../pages/signup/signUpLoginPage.js";
import{test,expect} from '@playwright/test';
import { launchBrowser } from '../utils/commonFunctions.js';

test('Login and save authenticate', async ({page})=>{
    const signinsignuppage = new signUpLoginPage(page);
    await launchBrowser(page);
await expect(signinsignuppage.returnLoginToYourHeader()).toHaveText('Login to your account');
await signinsignuppage.clickLogin('Naveen@12','Naveen');
await expect(page.getByText('Logged in as')).toBeVisible();

//await page.waitForTimeout(5000);
await page.context().storageState({path:'playwright/.auth/user.json'});

})