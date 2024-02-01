import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import router from '../router';

export const useAuth = defineStore('auth', () => {

    const token = ref(localStorage.getItem("token"));
    const isAuth = ref(false);

    function setToken(tokenValue : string) {
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
    }

    function setIsAuth(auth : any) {
        isAuth.value = auth;
    }

    const isAuthenticated = computed(() => {
        return token.value;
    })

    if (token.value) {
        isAuth.value = true;
    }

    function clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/');
        isAuth.value = false;
        token.value = '';
    }

    return {
        token,
        setToken,
        isAuthenticated,
        clear,
        setIsAuth,
        isAuth
    }

})