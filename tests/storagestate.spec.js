import { signUpLoginPage } from "../pages/signup/signUpLoginPage.js";
import{test,expect} from '@playwright/test';
import { launchBrowser } from '../utils/commonFunctions.js';

test.describe('storage @smoke @regression',async()=>{

    let user;
test.beforeAll(async()=>{
    user = {
            name: 'Naveen',
            password: 'Naveen@12',
            email: 'Naveen@gmail'
    }
})
test('Login and save authenticate', async ({page})=>{
    await page.goto('/products');
    //await page.waitForTimeout(15000);
})
})
