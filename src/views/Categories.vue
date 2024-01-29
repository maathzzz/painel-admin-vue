<script setup lang="ts">
import AddCategoryModal from '../components/modals/AddCategoryModal.vue';
import LoggedLayout from '../layouts/LoggedLayout.vue';
</script>

<template>
    <LoggedLayout>
        <div class="w-full flex flex-row items-center justify-start mb-4">
            <div class="flex flex-row items-center gap-3">
                <AddCategoryModal />
            </div>
        </div>
        <div class="overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Nome da Categoria
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Criada em
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Eletrônicos
                        </th>
                        <td class="px-6 py-4">
                            29/01/2024
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </LoggedLayout>
</template>

<style>

</style>