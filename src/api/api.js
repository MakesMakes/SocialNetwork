import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true, // чтобы запрос на сервак шел НЕ как от анонима
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2cca35e7-065b-460e-b013-63a6fb53f9b6" // требуется ключ доступа для DELETE
    }
})

export const getUserAPI = (currentPage, pageSize) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
    )
        .then(response => {
            return response.data
        });

}

export const getAuthAPI = () => {
    return (
        instance.get(`auth/me`)
    )
        .then(response => {
            return response.data
        });
}

export const deleteUserAPI = (id) => {
    return (
        instance.delete(`follow/${id}`)
    )
        .then(response => {
            return response.data
        });
}

export const postUserAPI = (id) => {
    return (
        instance.post(`follow/${id}`, {})
    )
        .then(response => {
            return response.data
        });
}