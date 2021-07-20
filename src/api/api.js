import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true, // чтобы запрос на сервак шел НЕ как от анонима
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c123e649-2bdd-4f8e-a81d-83896255927b" // требуется ключ доступа для DELETE
    }
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`) //методы возвращают промисы
            .then(response => {
                return response.data
            })
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
            .then(response => {
                return response.data
            })
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        });
    },

    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
        .then(response => {
            return response.data
        });
    },

    logout(){
        return instance.delete(`auth/login`)
        .then(response => {
            return response.data
        });
    }
}