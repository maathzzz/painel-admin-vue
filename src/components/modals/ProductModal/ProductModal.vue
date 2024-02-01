<script setup lang="ts">
import { onMounted, defineEmits, ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
} from '@headlessui/vue'
import EditProduct from './components/EditProduct.vue'
import { Switch } from '@headlessui/vue'
import useGetProductById from '../../../composables/useGetProductById';

const props = defineProps({
    productId: {
        type: Number,
        required: true
    },
})

const emit = defineEmits(['handleFetchNewData'])

const loading = ref(true)
const enabled = ref(false)
const isOpen = ref(false)

const { getProductById, data } = useGetProductById();

const onProductUpdated = async () => {
    closeModal()
    emit('handleFetchNewData')
}

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}



onMounted(async () => {
    loading.value = true;
    await getProductById(props.productId).then(() => {
        loading.value = false;
    });
});

</script>

<template>
    <div class="">
        <button type="button" @click="openModal"
                class="rounded-full  px-2 py-2 text-sm font-medium text-white hover:bg-slate-200/75 focus:outline-none focus-visible:ring-2 ">
                <ph-app-window :size="22" color="FFFFFF" />
        </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <div className="w-[650px] h-auto bg-white flex flex-col border border-zinc-300 p-8 rounded-2xl gap-6">
                            <div className="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Switch
                                        v-model="enabled"
                                        :class="enabled ? 'bg-gray-200' : 'bg-gray-300'"
                                        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                    >
                                    <span class="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                                        class="pointer-events-none flex items-center justify-center h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                                    > 
                                        <div v-if="enabled">
                                            <ph-pencil :size="24" color="gray" />
                                        </div>
                                        <div v-else>
                                            <ph-eye :size="24" color="gray" />
                                        </div>
                                    </span>
                                    
                                    </Switch>
                                </div>
                              <button @click="closeModal">
                                  <ph-x :size="32" />
                              </button>
                            </div>

                            <div v-if="!enabled" class="w-full h-auto">
                                <div class="flex flex-col w-full gap-4">
                                    <div class="flex flex-col">
                                        <h2 class="text-3xl font-bold"> {{ data?.name }}</h2>
                                        <span class="font-medium text-lg text-gray-500"> {{ data?.category?.name }}</span>
                                    </div>
                                    <div class="flex flex-row gap-12">
                                        <div class="flex flex-col">
                                            <span class="font-medium text-gray-500 text-lg">Preço </span>
                                            <span class="font-bold text-gray-900 text-xl">
                                                {{
                                                    new Intl.NumberFormat('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL',
                                                    }).format(data?.price)
                                                }}
                                            </span>
                                        </div>
                                        <div class="flex flex-col">
                                                <span class="font-medium text-gray-500 text-lg">Descrição </span>
                                                <span class="font-medium text-gray-900 text-lg">
                                                    {{  data?.description }}                                                   
                                                </span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <EditProduct v-else @product-updated="onProductUpdated" :product="data" :productId="$props.productId" />
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>