<script setup lang="ts">
import { ref, onMounted } from "vue";
import AddCategoryModal from "../components/modals/AddCategoryModal.vue";
import LoggedLayout from "../layouts/LoggedLayout.vue";
import useGetCategories from "../composables/useGetCategories.ts";
import LoadingComponent from "../components/LoadingComponent.vue";

const { fetchData, data } = useGetCategories();

const loading = ref(true);

const handleFetchNewData = async () => {
	loading.value = true;
	await fetchData().then(() => {
		loading.value = false;
	});
};

onMounted(async () => {
	loading.value = true;
	await fetchData().then(() => {
		loading.value = false;
	});
});

</script>

<template>
  <LoggedLayout>
    <div class="w-full flex flex-row items-center justify-start mb-4">
      <div class="flex flex-row items-center gap-3">
        <AddCategoryModal @category-created="handleFetchNewData" />
      </div>
    </div>
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
      <div
        v-if="loading"
        class="w-full h-[10rem] flex justify-center items-center"
      >
        <LoadingComponent />
      </div>
      <table
        v-else
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              class="px-6 py-3"
            >
              ID
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Nome da Categoria
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Criada em
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="category in data"
            :key="category.id"
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ category.id }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ category.name }}
            </th>
            <td class="px-6 py-4">
              {{ category.created_at }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </LoggedLayout>
</template>