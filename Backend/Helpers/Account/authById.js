<<<<<<< HEAD:Helpers/Account/authById.js
import Account from '../../Schema/AccountSchema'

const authById = async(body) => {
    const { Id } = body
    const user = await Account.findOne({ Id: Id})
    if(!user) {
        return res.send(`Name with Id: ${Id} don't exists`)
    }
    return user
}

export default authById
=======
import Account from '../Schema/AccountSchema'

const authById = async(body) => {
    const { Id } = body
    const user = await Account.findOne({ Id: Id})
    if(!user) {
        return res.send(`Name with Id: ${Id} don't exists`)
    }
    return user
}


export default authById
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Helpers/Account/authById.js
