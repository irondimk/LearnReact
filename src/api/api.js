import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "9d962c55-9882-4560-bc86-87c63d9b1519"
    }
})


export const profileAPI = {
    userProfile(userId){
        return instance.get(`profile/${userId}`)
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
        return instance.put(`profile/status`, {status: status})
        .then(response => {
            return response.data
        })
    },
    uploadUserPhoto(photo){
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipat/form-data'
            }
        })
        .then(response => {
            return response.data
        })
    }
}

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
    enterSite(email, password, rememberMe){
        return instance.post(`/auth/login`, {email, password, rememberMe}).then(response => {
            return response.data;
        })
    },
    exitSite(){
        return instance.delete(`/auth/login`, {}).then(response => {
            return response.data;
        })
    }
}
