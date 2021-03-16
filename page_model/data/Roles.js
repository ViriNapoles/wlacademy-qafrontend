import {Role} from 'testcafe'
import LoginPage from '../pages/LoginPage'
import CREDENTIALS, {BASE_URL} from './Constants'

export const validUser = Role(BASE_URL, async t=>{
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
}, { preserveUrl: true })

export const invalidUser = Role(BASE_URL, async t=>{
    await t
        .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
}, { preserveUrl: true })