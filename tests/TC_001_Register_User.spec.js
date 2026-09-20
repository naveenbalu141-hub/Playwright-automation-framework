import {expect } from '@playwright/test';
//import { signUpLoginPage } from '../pages/signup/signUploginPage.js';
import { customerDetailsPage } from '../pages/signup/customerDetailsPage.js';
import { launchBrowser,deleteUser } from '../utils/commonFunctions.js';
import {test} from '../fixtures/testFixtures.js';
import user from '../testdata/users.json' with { type: 'json' };
test.use({
        storageState: {
            cookies: [],
            origins: []
        }});
/*const users = [
  { name: 'Naveen', email: 'naveen1@test.com', password: 'Pass123' },
  { name: 'Kumar', email: 'kumar2@test.com', password: 'Pass456' }
];*/

test(`Register User-${user.name}`, async ({ page,customerDetailsPagee,signUpLoginPagee }) => {
  //const signUpLoginPage = new signUpLoginPage(page);
  //const customerDetailsPage = new customerDetailsPage(page);
  //await signUpLoginPage.launchBrowser();
  //await expect(page).toHaveURL('https://automationexercise.com/');
  //await expect(signUpLoginPagee.mainPage.fullFledgedHeading).toBeVisible();
  await launchBrowser(page);
  await expect(signUpLoginPagee.getNewUserSignUpHeader())
    .toHaveText('New User Signup!');
  //const username = `${Math.random()}@gmail.com`
  await signUpLoginPagee.enterUserNameAndEmail(user.name, user.email);
  //await page.waitForTimeout(5000);
  await signUpLoginPagee.clickSignUpButton();
  await expect(signUpLoginPagee.getaccountverification()).toHaveText('Enter Account Information')
  //await customerDetailsPagee.enterPassword(Math.random().toString(36).substring(2, 8));
  await customerDetailsPagee.enterPassword(user.password);
  await customerDetailsPagee.enterDOB();
  await customerDetailsPagee.clickSpecialOffersAndNewsLetter();
  await customerDetailsPagee.fillAddressDetails('Naveen','Kumar');
  await customerDetailsPagee.clickCreateAccountBtn();
  await expect(customerDetailsPagee.getAccountCreatedText()).toHaveText('Account Created!');
  await customerDetailsPagee.clickContinueBtn();
  await deleteUser(page);
    await page.waitForTimeout(50000);

  await customerDetailsPage.clickContinueBtn();
  await page.waitForTimeout(5000);
})