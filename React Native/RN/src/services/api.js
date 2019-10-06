import axios from 'axios'
const api=axios.create({
    baseURL:'http://172.30.152.177:3000',
})
export default api