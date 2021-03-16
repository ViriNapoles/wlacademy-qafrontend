import ProductsPage from '../pages/ProductsPage'
import { validUser } from '../data/Roles'

fixture('Logout page testing')
    .beforeEach(async t => {
        await t.useRole(validUser)
    })

test('Logout from products page', async t => {
    await ProductsPage.logoutUser()
})
