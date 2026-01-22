import axios, { type AxiosInstance } from "axios";

export const api : AxiosInstance = axios.create({
    baseURL : 'https://dummyjson.com/products',
    headers : {'Content-Type': 'application/json'},
    timeout : 5000
})

// api.interceptors.request.use(
// (config) => {
//     const token = localStorage.getItem('token')
//     if(token){
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
// },
// (error) => {
//     return Promise.reject(error)
// }
// )

