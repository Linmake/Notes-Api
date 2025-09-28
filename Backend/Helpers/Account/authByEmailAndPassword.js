<<<<<<< HEAD:Helpers/Account/authByEmailAndPassword.js
import { compare } from 'bcrypt'
import Account from '../../Schema/AccountSchema.js'
const authByEmailAndPassword = async(Email, Password) => {
    const account = await Account.findOne({ Email: Email })
    if(!account) return res.status(401).send("Incorrect credentials")
    const checkPassword = await compare(Password, account.Password)
    if(!checkPassword) return res.status(401).send("Incorrect credentials")
    return account
}
export default authByEmailAndPassword
=======
import { compare } from 'bcrypt'
import Account from '../Schema/AccountSchema.js'
const authByEmailAndPassword = async(Email, Password) => {
    const account = await Account.findOne({ Email: Email })
    if(!account) return res.status(401).send("Incorrect credentials")
    const checkPassword = await compare(Password, account.Password)
    if(!checkPassword) return res.status(401).send("Incorrect credentials")
    return account
}

export default authByEmailAndPassword
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Helpers/Account/authByEmailAndPassword.js
