import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:'ff6d30c826c3126887e96d00fee6f368',
        language:'pt-BR',
        page: 1
    }
})

export default api 