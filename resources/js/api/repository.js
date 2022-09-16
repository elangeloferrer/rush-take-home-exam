import api from './api';

export default {
    createSession() {
        return api.get('http://localhost:8000/api/sanctum/csrf-cookie');
    },
    
    login(params) {
        return api.post('http://localhost:8000/api/login', params);
    },
    
    logout() {
        return api.delete('http://localhost:8000/api/logout');
    },

    saveUser(data) {
        return api.post('http://localhost:8000/api/users', data);
    },

    getAllUsers() {
        return api.get('http://localhost:8000/api/users');
    }


}