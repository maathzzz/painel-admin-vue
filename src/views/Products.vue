<script setup lang="ts">
    import AddProduct from '../components/modals/AddProduct.vue';
import LoggedLayout from '../layouts/LoggedLayout.vue';
</script>

<template>
    <LoggedLayout>
        <div class="w-full flex flex-row items-center justify-start mb-4">
            <div class="flex flex-row items-center gap-3">
                <AddProduct/>
                <div class="relative">
                    <label for="Search" class="sr-only"> Search </label>

                    <input
                        type="text"
                        id="Search"
                        placeholder="Pesquisar Produto..."
                        class="w-full rounded-md border-gray-200 py-2.5 pl-3 pe-10 shadow-sm sm:text-sm"
                    />

                    <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" class="text-gray-600 hover:text-gray-700">


                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-4 w-4"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Produto
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Descrição
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Categoria
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Preço
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Laptop em promoção
                        </th>
                        <td class="px-6 py-4">
                            Eletrônicos
                        </td>
                        <td class="px-6 py-4">
                            R$2.999,00
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Ver / Editar </a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </LoggedLayout>
</template>

<style>
.frame-screen {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 19px;
    position: relative;
    width: 1064px;
}
</style>