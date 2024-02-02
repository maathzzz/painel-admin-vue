<script setup lang="ts">
import { ref, defineEmits } from "vue";
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
} from "@headlessui/vue";
import useDeleteProduct from "../../composables/useDeleteProduct";

const props = defineProps({
	productId: {
		type: Number,
		required: true
	},
	productName: {
		type: String,
		required: true
	}
});

const emit = defineEmits(["product-deleted"]);

const { deleteProduct } = useDeleteProduct();

const isOpen = ref(false);

function closeModal() {
	isOpen.value = false;
}
function openModal() {
	isOpen.value = true;
}

const handleSubmit = async () => {
	await deleteProduct(props.productId).then(() => {
		closeModal();
		emit("product-deleted");
	});
};

</script>

<template>
  <div class="">
    <button
      type="button"
      class="rounded-full  px-2 py-2 text-sm font-medium text-white hover:bg-slate-200/75 focus:outline-none focus-visible:ring-2 "
      @click="openModal"
    >
      <ph-trash
        :size="22"
        color="FFFFFF"
      />
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
        <div class="flex min-h-full items-center justify-center p-4">
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
              <div className="flex justify-center">
                <span className="text-2xl font-bold text-red-500">
                  Deseja apagar esse produto?
                </span>
              </div>

              <div class="flex items-center flex-col mt-5 gap-5">
                <p className="text-gray-500">
                  Você tem certeza que deseja apagar o produto <span className="font-bold">{{ productName }}</span>?
                </p>
                <div class="w-full flex flex-row justify-evenly">
                  <button
                    class="inline-block shrink-0 rounded-md border border-red-500 bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-blue-500"
                    @click="handleSubmit"
                  >
                    Sim
                  </button>
                  <button
                    class="inline-block shrink-0 rounded-md border border-gray-500 bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-blue-500"
                    @click="closeModal"
                  >
                    Não
                  </button>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>