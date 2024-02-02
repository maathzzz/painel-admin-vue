<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import AddProductModal from "../components/modals/AddProductModal.vue";
import LoggedLayout from "../layouts/LoggedLayout.vue";
import useGetProducts from "../composables/useGetProducts.ts";
import LoadingComponent from "../components/LoadingComponent.vue";
import DeleteProductModal from "../components/modals/DeleteProductModal.vue";
import ProductModal from "../components/modals/ProductModal/ProductModal.vue";

const { fetchData, data, lastPage } = useGetProducts();
const loading = ref(true);
const searchQuery = ref("");

const page = ref(1);

const filteredProducts = computed(() => {
	if (!searchQuery.value) {
		return data.value;
	}
	const query = searchQuery.value.toLowerCase();
	return data.value.filter((product :  any ) => product.name.toLowerCase().includes(query));
});

const isLastPage = computed(() => {
	return page.value === lastPage.value;
});

const handleFetchNewData = async () => {
	loading.value = true;
	await fetchData(page.value).then(() => {
		loading.value = false;
	});
};

const handlePaginationPrevious = async () => {
	loading.value = true;
	page.value--;
	await fetchData(1).then(() => {
		loading.value = false;
	});
};

const handlePaginationNext = async () => {
	loading.value = true;
	page.value++;
	await fetchData(page.value).then(() => {
		loading.value = false;
	});
};

onMounted(async () => {
	loading.value = true;
	await fetchData(page.value).then(() => {
		loading.value = false;
	});
});
</script>

<template>
  <LoggedLayout>
    <div class="w-full flex flex-row items-center justify-start mb-4">
      <div class="flex flex-row items-center gap-3">
        <AddProductModal @product-created="handleFetchNewData" />
        <div class="relative">
          <label
            for="Search"
            class="sr-only"
          > Search </label>
          <input
            id="Search"
            v-model="searchQuery"
            type="text"
            placeholder="Pesquisar Produto..."
            class="w-full rounded-md border-gray-200 py-2.5 pl-3 pe-10 shadow-sm sm:text-sm"
          >
          <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <ph-magnifying-glass :size="16" />
          </span>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
      <div
        v-if="loading"
        class="w-full h-[19rem] flex justify-center items-center"
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
              Produto
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            >
              Preço
            </th>
            <th
              scope="col"
              class="px-6 py-3"
            />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in filteredProducts"
            :key="product.id"
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ product.id }}
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ product.name }}
            </th>
            <td class="px-6 py-4">
              {{
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.price)
              }}
            </td>
            <td class="flex flex-row items-center px-6 py-4 gap-7">
              <ProductModal
                :product-id="product.id"
                @handle-fetch-new-data="handleFetchNewData"
              />
              <DeleteProductModal
                :product-id="product.id"
                :product-name="product.name"
                @product-deleted="handleFetchNewData"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="inline-flex items-center justify-center gap-3 mt-3">
      <button
        :disabled="page === 1"
        class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        @click="handlePaginationPrevious"
      >
        <span class="sr-only">Next Page</span>
        <ph-caret-left :size="10" />
      </button>

      <p class="text-xs text-gray-900">
        {{ page }}
        <span class="mx-0.25">/</span>
        {{ lastPage }}
      </p>

      <button
        :disabled="isLastPage"
        class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        @click="handlePaginationNext"
      >
        <span class="sr-only">Next Page</span>
        <ph-caret-right :size="10" />
      </button>
    </div>
  </LoggedLayout>
</template>