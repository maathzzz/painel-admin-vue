import { ref, Ref } from 'vue';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'vue3-toastify';

interface UseGetProductById {
    data: Ref<any>;
    loading: Ref<boolean>;
    error: Ref<any | null>;
    getProductById: (id: any) => Promise<void>;
}

const token = localStorage.getItem('token');

const useGetProductById = (): UseGetProductById => {
    const data = ref<any>();
    const loading = ref(false);
    const error = ref<any | null>(null);

    const getProductById = async (id: number): Promise<void> => {
        try {
            const apiUrl = `${import.meta.env.VITE_API_URL}products/${id}`;
            const response: AxiosResponse = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            data.value = response.data.data;

        } catch (err) {
            console.error('Error deleting data:', err);
            error.value = err;

            toast(`${err}`, {
                "theme": "colored",
                "type": "error",
                "dangerouslyHTMLString": true
            });
        }
    };

    return { data, loading, error, getProductById };
};

export default useGetProductById;