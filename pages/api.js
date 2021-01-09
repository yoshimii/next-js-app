import Axios from 'axios';

let urls = {
    test: 'https://easydoseit.herokuapp.com/api/', 
    development: 'https://easydoseit.herokuapp.com/api/', 
    production: 'https://easydoseit.herokuapp.com/api/'
}

const api = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api;