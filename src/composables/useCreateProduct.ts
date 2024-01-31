import { ref, Ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { toast } from 'vue3-toastify';

interface CreateProductData {
    category_id: number;
    name: string;
    price: number;
    description: string;
}

interface UseCreateProduct {
    category_id: Ref<number>;
    name: Ref<string>;
    price: Ref<number>;
    description: Ref<string>;
    // loading: Ref<boolean>;
    error: Ref<any | null>;
    createProduct: () => Promise<any>;
}

const token = localStorage.getItem('token');

const useCreateProduct = (): UseCreateProduct => {
    const category_id = ref(0);
    const name = ref('');
    const price = ref(0);
    const description = ref('');
    const error = ref<any | null>(null);

    const createProduct = async (): Promise<void> => {
        try {

            const apiUrl = 'https://challenge-labi9-4b4c472d5c07.herokuapp.com/api/products';

            const response = await axios.post(apiUrl, {
                category_id: category_id.value,
                name: name.value,
                price: price.value,
                description: description.value

            } as CreateProductData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then((res) => {
                toast("Produto criado com sucesso!", {
                    "theme": "colored",
                    "type": "success",
                    "dangerouslyHTMLString": true
                })
                console.log(res)
            });

            category_id.value = 0;
            name.value = '';
            price.value = 0;
            description.value = '';

        } catch (err : any) {
            console.error('Product error:', (err as AxiosError).response ? (err as AxiosError).response?.data : err.message);
            error.value = (err as AxiosError).response ? (err as AxiosError).response?.data : err.message;

            toast(`${err.message}`, {
                "theme": "colored",
                "type": "error",
                "dangerouslyHTMLString": true
            });
        }
    };

    return { category_id, name, price, description, error, createProduct };
};

export default useCreateProduct;
