<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
	product: {
		type: Object,
		required: true
	},
});


</script>

<template>
    <div
        class="w-full h-auto"
    >
    <div class="flex flex-col w-full gap-4">
        <div class="flex flex-col">
        <h2 class="text-3xl font-bold">
            {{ product?.name }}
        </h2>
        <span class="font-medium text-lg text-gray-500"> {{ product?.category?.name }}</span>
        </div>
        <div class="flex flex-row gap-12">
        <div class="flex flex-col">
            <span class="font-medium text-gray-500 text-lg">Preço </span>
            <span class="font-bold text-gray-900 text-xl">
            {{
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(product?.price)
            }}
            </span>
        </div>
        <div class="flex flex-col">
            <span class="font-medium text-gray-500 text-lg">Descrição </span>
            <span class="font-medium text-gray-900 text-lg">
            {{ product?.description }}                                                   
            </span>
        </div>
        </div>
    </div>
    </div>
</template>