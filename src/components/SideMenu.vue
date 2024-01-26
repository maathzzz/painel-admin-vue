<script setup lang="ts">
    import {SideMenuOptions} from '../data/SideMenuOptions'
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    const sideMenuOptions = ref(SideMenuOptions)
</script>

<template>
    <div class="h-screen flex flex-col bg-white gap-2 items-center py-10 w-48">
        <div v-for="options in sideMenuOptions" class="flex flex-col px-10 py-3 hover:bg-slate-100 duration-200 rounded cursor-pointer" >
        <RouterLink to="/dashboard" class="font-medium">{{ options.title }}</RouterLink>
        </div>
    </div>
</template>