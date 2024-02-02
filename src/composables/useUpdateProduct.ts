import { ref, Ref } from "vue";
import axios, { AxiosError } from "axios";
import { toast } from "vue3-toastify";

interface UpdateProductData {
    category_id: number;
    name: string;
    price: number;
    description: string;
}

interface UseUpdateProduct {
    category_id: Ref<number>;
    name: Ref<string>;
    price: Ref<number>;
    description: Ref<string>;
    // loading: Ref<boolean>;
    error: Ref<any | null>;
    updateProduct: (id: number) => Promise<any>;
}

const token = localStorage.getItem("token");

const useUpdateProduct = (): UseUpdateProduct => {
	const category_id = ref(0);
	const name = ref("");
	const price = ref(0);
	const description = ref("");
	const error = ref<any | null>(null);

	const updateProduct = async (id: number): Promise<void> => {
		try {

			const apiUrl = `${import.meta.env.VITE_API_URL}products/${id}`;

			await axios.put(apiUrl, {
				category_id: category_id.value,
				name: name.value,
				price: price.value,
				description: description.value

			} as UpdateProductData, {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			}).then(() => {
				toast("Produto atualizado com sucesso com sucesso!", {
					"theme": "colored",
					"type": "success",
					"dangerouslyHTMLString": true
				});
			});

		} catch (err: any) {
			console.error("Product error:", (err as AxiosError).response ? (err as AxiosError).response?.data : err.message);
			error.value = (err as AxiosError).response ? (err as AxiosError).response?.data : err.message;

			toast(`${err.message}`, {
				"theme": "colored",
				"type": "error",
				"dangerouslyHTMLString": true
			});
		}
	};

	return { category_id, name, price, description, error, updateProduct };
};

export default useUpdateProduct;
