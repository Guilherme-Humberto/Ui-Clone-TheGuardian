import axios from 'axios'

export default axios.create({
    baseURL: 'https://content.guardianapis.com/search?'
})