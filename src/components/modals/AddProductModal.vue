<script setup lang="ts">
import { ref, defineEmits } from "vue";
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
} from "@headlessui/vue";
import useCreateProduct from "../../composables/useCreateProduct";

const emit = defineEmits(["product-created"]);

const { createProduct, category_id, name, price, description } = useCreateProduct();

const isOpen = ref(false);

function closeModal() {
	isOpen.value = false;
}
function openModal() {
	isOpen.value = true;
}

const handleSubmit = async () => {
	await createProduct().then(() => {
		emit("product-created");
		closeModal();
	});
};
</script>

<template>
  <div class="">
    <button
      type="button"
      class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      @click="openModal"
    >
      Novo Produto
    </button>
  </div>
  <TransitionRoot
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      as="div"
      class="relative z-10"
      @close="closeModal"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div className="w-[700px] h-auto bg-white border border-zinc-300 p-8 rounded-2xl">
              <div className="flex justify-between">
                <span className="text-2xl font-bold text-sky-900">
                  Novo Produto
                </span>
                <button @click="closeModal">
                  <ph-x :size="28" />
                </button>
              </div>

              <form className="mt-6">
                <div>
                  <div className="flex justify-between flex-col md:flex-row md:gap-10">
                    <div className="w-full mt-2 mb-8 flex flex-col gap-1">
                      <label className="ml-2 text-gray-600 font-semibold">
                        Nome
                      </label>
                      <input
                        v-model="name"
                        type="text"
                        placeholder="Digite o nome"
                        className="max-w-full pr-3 pl-3 py-3 text-gray-600 bg-transparent outline-none border focus:border-sky-500 shadow-sm rounded-lg"
                      >
                    </div>
                    <div className="w-full mt-2 mb-8 flex flex-col gap-1">
                      <label className="ml-2 text-gray-600 font-semibold">
                        ID da Categoria
                      </label>
                      <input
                        v-model="category_id"
                        type="number"
                        placeholder="Digite o ID da categoria"
                        className="max-w-full pr-3 pl-3 py-3 text-gray-600 bg-transparent outline-none border focus:border-sky-500 shadow-sm rounded-lg"
                      >
                    </div>
                  </div>
                  <div className="flex justify-between flex-col md:flex-row md:gap-10">
                    <div className="w-full mt-2 mb-8 flex flex-col gap-1">
                      <label className="ml-2 text-gray-600 font-semibold">
                        Descrição 
                      </label>
                      <textarea
                        v-model="description"
                        type="text"
                        placeholder="Digite a descrição"
                        className="w-full py-2 px-3 rounded-lg border-[1px] border-slate-200 align-top shadow-sm sm:text-sm"
                      />
                    </div>
                    <div className="w-full mt-2 mb-8 flex flex-col gap-1">
                      <label className="ml-2 text-gray-600 font-semibold">
                        Preço 
                      </label>
                      <input
                        v-model="price"
                        type="number"
                        placeholder="Digite o preço"
                        className="max-w-full pr-3 pl-3 py-3 text-gray-600 bg-transparent outline-none border focus:border-sky-500 shadow-sm rounded-lg"
                      >
                    </div>
                  </div>
                          
                  <div className="w-full flex justify-center">
                    <button
                      type="submit"
                      className="w-[10.6875rem] h-[3.125rem] bg-sky-600 text-white font-bold rounded-md duration-300 hover:bg-sky-700"
                      @click.prevent="handleSubmit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>