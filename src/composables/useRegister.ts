import axios, { AxiosError } from 'axios';
import { ref, Ref } from 'vue';
import { toast } from "vue3-toastify";
import router from '../router';

interface RegisterData {
    email: string;
    password: string;
}

interface UseRegister {
    name: Ref<string>;
    email: Ref<string>;
    password: Ref<string>;
    error: Ref<any | null>;
    password_confirmation: Ref<string>;
    loading: Ref<boolean>;
    register: () => Promise<void>;
}

const useRegister = (): UseRegister => {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const password_confirmation = ref('');
    const loading = ref(false);
    const error = ref<any | null>(null);

    const register = async (): Promise<void> => {
        try {
            loading.value = true;

            const apiUrl = `${import.meta.env.VITE_API_URL}auth/register`;

            await axios.post(apiUrl, {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
            } as RegisterData).then(() => {
                router.push('/')
            });

            toast("Registro Realizado com Sucesso!", {
                "theme": "colored",
                "type": "success",
                "dangerouslyHTMLString": true
            })

            name.value = '';
            email.value = '';
            password.value = '';
            password_confirmation.value = '';
            loading.value = false;
            error.value = null;

        } catch (err: any) {
            console.error('Register error:', (err as AxiosError).response ? (err as AxiosError).response?.data : 'Erro');
            error.value = (err as AxiosError).response ? (err as AxiosError).response?.data : 'Erro';
            loading.value = false;

            toast(`${err.message}`, {
                "theme": "colored",
                "type": "error",
                "dangerouslyHTMLString": true
            });

            name.value = '';
            email.value = '';
            password.value = '';
            password_confirmation.value = '';
            loading.value = false;
            error.value = null;
        }
    };

    return { name, email, password, password_confirmation, loading, error, register };
};

export default useRegister;
