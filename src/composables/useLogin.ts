import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'vue-router';
import { ref, Ref } from 'vue';
import { useAuth } from '../stores/auth';

interface LoginData {
    email: string;
    password: string;
}

interface UseLogin {
    email: Ref<string>;
    password: Ref<string>;
    loading: Ref<boolean>;
    error: Ref<string | null>;
    login: () => Promise<void>;
}

const { setIsAuth, setToken } = useAuth();

const useLogin = (): UseLogin => {
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref<string | null>(null);
    const router = useRouter();

    const login = async (): Promise<void> => {
        try {
            loading.value = true;

            const apiUrl = 'https://challenge-labi9-4b4c472d5c07.herokuapp.com/api/auth/login';

            const response: AxiosResponse = await axios.post(apiUrl, {
                email: email.value,
                password: password.value,
            } as LoginData);

            setToken(response.data.data.token)
            setIsAuth(true);
            router.push('/dashboard/products')

            email.value = '';
            password.value = '';
            loading.value = false;
            error.value = null;
            
        } catch (err) {
            console.error('Login error:', (err as AxiosError).response ? (err as AxiosError).response?.data : 'Erro');
            // error.value = (err as AxiosError).response ? (err as AxiosError).response?.data : 'Erro';
            loading.value = false;
        }
    };

    return { email, password, loading, error, login };
};

export default useLogin;
