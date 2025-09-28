<<<<<<< HEAD:Controllers/Account/signup.controller.js
import authToken from '../../Routes/auth_token.js'
import cookieAuth from './cookie/cookieAuth.js'
import { signupByEmail } from '../../Helpers/Account/signupByEmail.js'
const signupController = async( req, res ) => {
    try{
        const account = await signupByEmail(req.body)
        const jwt = await authToken(account.Id)
        const cookieBody = cookieAuth()
        res.cookie('JWT', jwt, cookieBody)
        await account.save()
        return res.status(201).send(account)
    }catch(err){
        return res.status(401).send(err.message)
    }
}
export default signupController
=======
import authToken from '../Routes/auth_token.js'
import cookieAuth from './cookie/cookieAuth.js'
import { signupByEmail } from '../Helpers/Account/signupByEmail.js'
const signupController = async( req, res ) => {
    try{
        const account = await signupByEmail(req.body)
        const jwt = await authToken(account.Id)
        const cookieBody = cookieAuth()
        res.cookie('JWT', jwt, cookieBody)
        await account.save()
        return res.status(201).send(account)
    }catch(err){
        return res.status(401).send(err.message)
    }
}

export default signupController
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Controllers/Account/signup.controller.js
