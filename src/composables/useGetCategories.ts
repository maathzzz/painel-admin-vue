// useLogin.ts
import { ref, Ref } from 'vue';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface UseGetCategories {
    data: Ref<any>;
    loading: Ref<boolean>;
    error: Ref<string | null>;
    fetchData: () => Promise<void>;
}

const token = localStorage.getItem('token');

const useGetCategories = (): UseGetCategories => {
    const data = ref('');
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchData = async (): Promise<void> => {
        try {
            const apiUrl = 'https://challenge-labi9-4b4c472d5c07.herokuapp.com/api/categories';
            const response: AxiosResponse = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response.data.data)
            data.value = response.data.data;
        } catch (err) {
            console.error('Error fetching data:', err);
            error.value = err;
        }
    };

    return { data, loading, error, fetchData };
};

export default useGetCategories;
