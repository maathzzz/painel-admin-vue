import { ref, Ref } from "vue";
import axios, { AxiosResponse } from "axios";
import { toast } from "vue3-toastify";

interface UseDeleteProduct {
    data: Ref<any>;
    loading: Ref<boolean>;
    error: Ref<any | null>;
    deleteProduct: (id: any) => Promise<void>;
}

const token = localStorage.getItem("token");

const useDeleteProduct = (): UseDeleteProduct => {
	const data = ref([]);
	const loading = ref(false);
	const error = ref<any | null>(null);

	const deleteProduct = async (id: number): Promise<void> => {
		try {
			const apiUrl = `${import.meta.env.VITE_API_URL}products/${id}`;
			const response: AxiosResponse = await axios.delete(apiUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			data.value = response.data.data;

			toast("Produto apagado com sucesso!", {
				"theme": "colored",
				"type": "success",
				"dangerouslyHTMLString": true
			});
		} catch (err : any) {
			console.error("Error deleting data:", err);
			error.value = err;

			toast(`${err.message}`, {
				"theme": "colored",
				"type": "error",
				"dangerouslyHTMLString": true
			});
		}
	};

	return { data, loading, error, deleteProduct };
};

export default useDeleteProduct;