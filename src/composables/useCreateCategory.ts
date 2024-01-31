import { ref, Ref } from 'vue';
import axios, { AxiosError } from 'axios';

interface CreateCategoryData {
    name: string;
}

interface UseCreateCategory {
    // data: Ref<any>;
    name: Ref<string>;
    // loading: Ref<boolean>;
    error: Ref<any | null>;
    createCategory: () => Promise<any>;
}

const token = localStorage.getItem('token');

const useCreateCategory = (): UseCreateCategory => {
    const name = ref('');
    // const data = ref('');
    const error = ref<any | null>(null);

    const createCategory = async (): Promise<void> => {
        try {

            const apiUrl = 'https://challenge-labi9-4b4c472d5c07.herokuapp.com/api/categories';

            const response: any = await axios.post(apiUrl, {
                name: name.value,

            } as CreateCategoryData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then((response) => {
                // console.log(response.data)
            });

            // data.value = response.data;
            name.value = '';

        } catch (err) {
            console.error('categories error:', (err as AxiosError).response ? (err as AxiosError).response?.data : err.message );
            error.value = (err as AxiosError).response ? (err as AxiosError).response?.data : err.message ;
        }
    };

    return { name, error, createCategory };
};

export default useCreateCategory;
