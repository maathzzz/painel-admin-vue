import { ref, Ref } from "vue";
import axios, { AxiosError } from "axios";
import { toast } from "vue3-toastify";

interface CreateCategoryData {
    name: string;
}

interface UseCreateCategory {
    name: Ref<string>;
    error: Ref<any | null>;
    createCategory: () => Promise<any>;
}

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

const useCreateCategory = (): UseCreateCategory => {
	const name = ref("");
	const error = ref<any | null>(null);

	const createCategory = async (): Promise<void> => {
		try {

			const apiUrl = `${API_URL}categories`;

			await axios.post(apiUrl, {
				name: name.value,

			} as CreateCategoryData, {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			}).then(() => {
				toast("Categoria criada com sucesso!", {
					"theme": "colored",
					"type": "success",
					"dangerouslyHTMLString": true
				});
			});

			name.value = "";

		} catch (err: any) {
			console.error("categories error:", (err as AxiosError).response ? (err as AxiosError).response?.data : err.message );
			error.value = (err as AxiosError).response ? (err as AxiosError).response?.data : err.message; 

			toast(`${err.message}`, {
				"theme": "colored",
				"type": "error",
				"dangerouslyHTMLString": true
			});
		}
	};

	return { name, error, createCategory };
};

export default useCreateCategory;
