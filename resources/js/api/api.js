// API MODULE: global access wrapper
import axios from "axios";

let instance = axios.create({
    withCredentials: true // needed for cors configuration 
});

// request interceptors will be run before each call to the back end
instance.interceptors.request.use(request => {
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';
    return request;
});

// response interceptors
instance.interceptors.response.use(
    response => { return response; },
    error => {
        if(error.response.status === 401) { // if the request is unauthenticated
            sessionStorage.removeItem('user'); // user key in the session storage will be remove
            window.location.reload(); // then reload the page, then it will trigger the middleware
        }
        
        return error.response;
    }
    
);

export default instance;