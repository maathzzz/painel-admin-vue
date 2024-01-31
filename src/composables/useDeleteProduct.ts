import { ref, Ref } from 'vue';
import axios, { AxiosResponse } from 'axios';

interface UseDeleteProduct {
    data: Ref<any>;
    loading: Ref<boolean>;
    error: Ref<any | null>;
    deleteProduct: (id: any) => Promise<void>;
}

const token = localStorage.getItem('token');

const useDeleteProduct = (): UseDeleteProduct => {
    const data = ref([]);
    const loading = ref(false);
    const error = ref<any | null>(null);

    const deleteProduct = async (id: number): Promise<void> => {
        try {
            const apiUrl = `https://challenge-labi9-4b4c472d5c07.herokuapp.com/api/products/${id}`;
            const response: AxiosResponse = await axios.delete(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            data.value = response.data.data;
        } catch (err) {
            console.error('Error deleting data:', err);
            error.value = err;
        }
    };

    return { data, loading, error, deleteProduct };
};

export default useDeleteProduct;