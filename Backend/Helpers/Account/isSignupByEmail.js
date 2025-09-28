<<<<<<< HEAD:Helpers/Account/isSignupByEmail.js
import Account from '../../Schema/AccountSchema.js'
/**
 * 
 * @param {*} body Verify that the account creation email already exists
 * @returns 
 */
export const isSignupByEmail = async( body ) => {
	try{
		const accountByEmail = await Account.findOne({ Email: body.Email })
		if( accountByEmail ) {
			return true
		}
		return false
		}catch(err){
			return false
		}
}
=======
import Account from '../Schema/AccountSchema.js'
/**
 * 
 * @param {*} body Verify that the account creation email already exists
 * @returns 
 */
export const isSignupByEmail = async( body ) => {
	try{
		const accountByEmail = await Account.findOne({ Email: body.Email })
		if( accountByEmail ) {
			return true
		}
		return false
		}catch(err){
			return false
		}

}
>>>>>>> 222e6553e7ec0b346ea9b78ec6b35425247afa8e:src/Helpers/Account/isSignupByEmail.js
