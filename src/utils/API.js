import axios from "axios"

const nationality = `?nat=us`
const BASEURL = `https://randomuser.me/api/?nat=us,gb&results=`



export default {
    search: (query) => {
        return axios.get(BASEURL + query);
    }
}

