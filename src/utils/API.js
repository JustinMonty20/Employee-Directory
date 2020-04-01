import axios from "axios"

const BASEURL = 'https://randomuser.me/api/?results='

export default {
    search: (query) => {
        return axios.get(BASEURL + query);
    }
}

