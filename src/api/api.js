import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "9d962c55-9882-4560-bc86-87c63d9b1519"
    }
})

export const userAPI = {
    getUsers(numberPage, pageSize){
        return instance.get(`users?page=${numberPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    follow(id){
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data;
        })
    },
    unfollow(id){
        return instance.delete(`follow/${id}`, {}).then(response => {
            return response.data;
        })
    },
    auth(){
        return instance.get('auth/me')
        .then(response => {
            return response.data
        })
    },
    userProfile(userId){
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
    }
}
