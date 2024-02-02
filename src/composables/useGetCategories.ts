import { ref, Ref } from "vue";
import axios, { AxiosResponse } from "axios";

interface UseGetCategories {
    data: Ref<any>;
    loading: Ref<boolean>;
    error: Ref<string | null>;
    fetchData: () => Promise<void>;
}

const token = localStorage.getItem("token");

const useGetCategories = (): UseGetCategories => {
	const data = ref("");
	const loading = ref(false);
	const error = ref<any | null>(null);

	const fetchData = async (): Promise<void> => {
		try {
			const apiUrl = `${import.meta.env.VITE_API_URL}categories`;
			const response: AxiosResponse = await axios.get(apiUrl, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
            
			data.value = response.data.data;
		} catch (err) {
			console.error("Error fetching data:", err);
			error.value = err;
		}
	};

	return { data, loading, error, fetchData };
};

export default useGetCategories;
