<<<<<<< HEAD:Routes/account.routes.js
import Account from '../src/Schema/AccountSchema.js'
import express from "express"
import signupController from '../src/Controllers/Account/signup.controller.js';
import signinController from '../src/Controllers/Account/signin.controller.js';
import editEmailController from '../src/Controllers/Account/editEmail.controller.js';
import deleteController from '../src/Controllers/Account/delete.controller.js';
import editPasswordController from '../src/Controllers/Account/editPassword.controller.js';
import userJWTDTO from '../src/DTO/userJWTDTO.js';
import editNameController from '../src/Controllers/Account/editName.controller.js';
import emailExistsController from '../src/Controllers/Account/emailExists.controller.js';
import idAccountController from '../src/Controllers/Account/idAccount.controller.js';
import deleteAllController from '../src/Controllers/Account/deleteAll.controller.js';
import loginController from '../src/Controllers/Account/login.controller.js';
import tokenController from '../src/Controllers/Account/cookie/token.controller.js';
import logoutController from '../src/Controllers/Account/logout.controller.js';

const AccountRouter = express.Router()

AccountRouter.get("/all", async(req, res) => {
    try{
        const allAccounts = await Account.find({})
        return res.status(200).send(allAccounts)
    }catch(err){
        return res.status(400).send(err)
    }
})

AccountRouter.post("/signup", signupController)

AccountRouter.post("/signin", signinController)

AccountRouter.put('/update-email', userJWTDTO, editEmailController)

AccountRouter.post('/email-exists', emailExistsController)

AccountRouter.put('/update-password', userJWTDTO, editPasswordController)

AccountRouter.put('/update-name', userJWTDTO, editNameController)

AccountRouter.delete('/delete', userJWTDTO, deleteController)

AccountRouter.delete('/delete/all', userJWTDTO, deleteAllController)

AccountRouter.get('/idAccount', userJWTDTO, idAccountController)

AccountRouter.get('/login', loginController)

AccountRouter.get("/logout", logoutController)

AccountRouter.get('/token', tokenController)

export default AccountRouter
=======
import Account from '../Schema/AccountSchema.js'
import express from "express"
import signupController from '../Controllers/Account/signup.controller.js';
import signinController from '../Controllers/Account/signin.controller.js';
import editEmailController from '../Controllers/Account/editEmail.controller.js';
import deleteController from '../Controllers/Account/delete.controller.js';
import editPasswordController from '../Controllers/Account/editPassword.controller.js';
import userJWTDTO from '../DTO/userJWTDTO.js';
import editNameController from '../Controllers/Account/editName.controller.js';
import emailExistsController from '../Controllers/Account/emailExists.controller.js';
import idAccountController from '../Controllers/Account/idAccount.controller.js';
import deleteAllController from '../Controllers/Account/deleteAll.controller.js';
import loginController from '../Controllers/Account/login.controller.js';
import tokenController from '../Controllers/Account/cookie/token.controller.js';
import logoutController from '../Controllers/Account/logout.controller.js';

const AccountRouter = express.Router()

AccountRouter.get("/all", async(req, res) => {
    try{
        const allAccounts = await Account.find({})
        return res.status(200).send(allAccounts)
    }catch(err){
        return res.status(400).send(err)
    }
})

AccountRouter.post("/signup", signupController)

AccountRouter.post("/signin", signinController)

AccountRouter.put('/update-email', userJWTDTO, editEmailController)

AccountRouter.post('/email-exists', emailExistsController)

AccountRouter.put('/update-password', userJWTDTO, editPasswordController)

AccountRouter.put('/update-name', userJWTDTO, editNameController)

AccountRouter.delete('/delete', userJWTDTO, deleteController)

AccountRouter.delete('/delete/all', userJWTDTO, deleteAllController)

AccountRouter.get('/idAccount', userJWTDTO, idAccountController)

AccountRouter.get('/login', loginController)

AccountRouter.get("/logout", logoutController)

AccountRouter.get('/token', tokenController)

export default AccountRouter

>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Routes/account.routes.js
