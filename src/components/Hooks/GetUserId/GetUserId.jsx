import axios from "axios"

const GetUserId = async() => {
    const { data } = await axios.get("https://backend-lumiapina-production.up.railway.app/account/idAccount", { withCredentials: true })
    return data
}

export default GetUserId