import axios from "axios";

/**
 *
 * @param {*} body Verify that the account creation email already exists
 * @returns
 */
export const isSignupByEmail = async (body) => {
  try {
    const res = await axios.post("https://backend-lumiapina-production.up.railway.app/account/email-exists", body, {withCredentials: true});
    return res.data;
  } catch (err) {
    console.log(err)
    return (false);
  }
};
