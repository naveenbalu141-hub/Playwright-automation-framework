import {test as base} from '@playwright/test';
import { customerDetailsPage } from '../pages/signup/customerDetailsPage';
import { signUpLoginPage } from '../pages/signup/signUpLoginPage';
import { MainPage } from '../pages/mainpage/MainPage';
export const test = base.extend({customerDetailsPagee:async ({page},use)=>{
    const customerPage = new customerDetailsPage(page);
    await use(customerPage);
},
signUpLoginPagee:async ({page},use)=>{
    const signUpPage = new signUpLoginPage(page);
    await use(signUpPage);
}


})