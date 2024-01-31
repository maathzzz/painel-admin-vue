import { ref, Ref } from 'vue';
import axios, { AxiosResponse } from 'axios';

interface UseGetProducts {
    data: Ref<any>;
    loading: Ref<boolean>;
    error: Ref<any | null>;
    fetchData: (page: number) => Promise<void>;
    lastPage: Ref<number>;
}

const token = localStorage.getItem('token');

const useGetProducts = (): UseGetProducts => {
    const data = ref([]);
    const loading = ref(false);
    const error = ref<any | null>(null);
    const lastPage = ref(0);

    const fetchData = async (page : number): Promise<void> => {
        try {
            const apiUrl = `https://challenge-labi9-4b4c472d5c07.herokuapp.com/api/products?page=${page}&perPage=5`;
            const response: AxiosResponse = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response.data.meta)

            lastPage.value = response.data.meta.last_page;
            data.value = response.data.data;
        } catch (err) {
            console.error('Error fetching data:', err);
            error.value = err;
        }
    };

    return { data, loading, error, lastPage, fetchData };
};

export default useGetProducts;
