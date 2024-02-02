import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "vue-router";
import { ref, Ref } from "vue";
import { useAuth } from "../stores/auth";
import { toast } from "vue3-toastify";

interface LoginData {
    email: string;
    password: string;
}

interface UseLogin {
    email: Ref<string>;
    password: Ref<string>;
    loading: Ref<boolean>;
    error: Ref<any | null>;
    login: () => Promise<void>;
}

const { setIsAuth, setToken } = useAuth();

const useLogin = (): UseLogin => {
	const email = ref("");
	const password = ref("");
	const loading = ref(false);
	const error = ref<any | null>(null);
	const router = useRouter();

	const login = async (): Promise<void> => {
		try {
			loading.value = true;

			const apiUrl = `${import.meta.env.VITE_API_URL}auth/login`;

			const response: AxiosResponse = await axios.post(apiUrl, {
				email: email.value,
				password: password.value,
			} as LoginData);

			setToken(response.data.data.token);
			setIsAuth(true);
			router.push("/dashboard/products");

			toast("Login Realizado com Sucesso!", {
				"theme": "colored",
				"type": "success",
				"dangerouslyHTMLString": true
			});

			email.value = "";
			password.value = "";
			loading.value = false;
			error.value = null;
            
		} catch (err : any) {
			console.error("Login error:", (err as AxiosError).response ? (err as AxiosError).response?.data : "Erro");
			error.value = (err as AxiosError).response ? (err as AxiosError).response?.data : "Erro";
			loading.value = false;

			toast(`${err.message}`, {
				"theme": "colored",
				"type": "error",
				"dangerouslyHTMLString": true
			});
		}
	};

	return { email, password, loading, error, login };
};

export default useLogin;
