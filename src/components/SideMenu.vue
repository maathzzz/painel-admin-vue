<script setup lang="ts">
    import {SideMenuOptions} from '../data/SideMenuOptions'
    import { ref } from 'vue'

    const sideMenuOptions = ref(SideMenuOptions)
</script>

<template>
    <div class="h-screen flex flex-col bg-white gap-2 items-center py-10 w-48">
        <router-link :to="options.link" v-for="options in sideMenuOptions" class="flex flex-col px-10 py-3 hover:bg-slate-100 duration-200 rounded cursor-pointer" >
            <span class="font-medium">{{ options.title }}</span>
        </router-link>
    </div>
</template>