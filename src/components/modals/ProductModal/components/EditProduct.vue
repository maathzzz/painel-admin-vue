<script setup lang="ts">
import { defineEmits, ref, onMounted } from "vue";
import useUpdateProduct from "../../../../composables/useUpdateProduct";

const emit = defineEmits(["product-updated"]);

const props = defineProps({
	product: {
		type: Object,
		required: true
	},
	productId: {
		type: Number,
		required: true
	}
});

const product_id = ref(0);
const { updateProduct, category_id, name, price, description } = useUpdateProduct();

onMounted(() => {
	product_id.value = props.productId;
});

const handleSubmit = async () => {
	await updateProduct(product_id.value).then(() => {
		emit("product-updated");
		console.log("deu certo");
	});
};

</script>

<template>
  <form class="w-full h-auto flex flex-col gap-5">
    <h2 class="text-2xl font-bold">
      Editar {{ product?.name }}
    </h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center justify-between">
        <div>
          <label
            for="Name"
            class="block text-sm font-medium text-gray-700"
          > Editar Nome </label>
          <input
            id="Name"
            v-model="name"
            type="text"
            :placeholder="product?.name"
            class="mt-1 w-[11.2rem] py-2 px-3 rounded-md border-slate-200 shadow-sm border-[1px] sm:text-sm"
          >
        </div>
        <div>
          <label
            for="Price"
            class="block text-sm font-medium text-gray-700"
          > Editar Preço </label>
          <input
            id="Price"
            v-model="price"
            type="number"
            :placeholder="new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(product?.price)"
            class="mt-1 w-[11.2rem] py-2 px-3 rounded-md border-slate-200 shadow-sm border-[1px] sm:text-sm"
          >
        </div>
        <div>
          <label
            for="CategoryId"
            class="block text-sm font-medium text-gray-700"
          > Editar Categoria </label>
          <input
            id="CategoryId"
            v-model="category_id"
            type="Number"
            :placeholder="product?.category?.id"
            class="mt-1 w-[11.2rem] py-2 px-3 rounded-md border-slate-200 shadow-sm border-[1px] sm:text-sm"
          >
        </div>
      </div>
      <div class="">
        <label
          for="Description"
          class="block text-sm font-medium text-gray-700"
        > Editar Descrição </label>
        <textarea
          id="Description"
          v-model="description"
          class="mt-2 w-full py-2 px-3 rounded-lg border-[1px] border-slate-200 align-top shadow-sm sm:text-sm"
          rows="3"
          :placeholder="product?.description"
        />
      </div>
    </div>
    <button
      type="submit"
      class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      @click.prevent="handleSubmit"
    >
      Salvar
    </button>
  </form>
</template>