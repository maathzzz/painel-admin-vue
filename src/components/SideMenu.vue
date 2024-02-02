<script setup lang="ts">
import {SideMenuOptions} from "../data/SideMenuOptions";
import { ref } from "vue";
import { useAuth } from "../stores/auth";

const auth = useAuth();

const handleSignout = () => {
	auth.clear();
};
const sideMenuOptions = ref(SideMenuOptions);
</script>

<template>
  <aside class="md:h-screen w-full justify-between md:justify-start md:w-48 flex flex-row md:flex-col bg-white gap-2 items-center md:py-10 ">
    <router-link
      v-for="options in sideMenuOptions"
      :key="options.link"
      :to="options.link"
      class="flex flex-col px-4 md:px-10 py-3 hover:bg-slate-100 duration-200 rounded cursor-pointer"
    >
      <span class="font-medium">{{ options.title }}</span>
    </router-link>
    <button
      class="flex flex-col px-10 py-3 hover:bg-slate-100 duration-200 rounded cursor-pointer"
      @click="handleSignout"
    >
      <span class="font-medium">Sair</span>
    </button>
  </aside>
</template>