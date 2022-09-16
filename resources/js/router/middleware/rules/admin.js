import store from '../../../store';

export default (to, from, next) => {
    if(store.getters['authenticated'] && store.getters['user'].role == 1) {
        next();
    } else if(store.getters['authenticated'] && store.getters['user'].role == 2) {
        next({ name: 'NotFound' });
    } else {
        next({ name: 'Login' });
    }
}