import ProductsPage from '../pages/ProductsPage'
import { validUser, invalidUser } from '../data/Roles'

fixture('Login page testing')

test('Login with valid credentials', async t => {
    await t
        .useRole(validUser)
        .expect(ProductsPage.pageTitle.exists).ok()
})

test('Login with invalid credentials', async t => {
    await t
        .useRole(invalidUser)
        .expect(ProductsPage.pageTitle.exists).notOk()
})