
<script setup lang="ts">
    import SideMenu from '../components/SideMenu.vue';
</script>

<template>
    <main class="flex flex-row">
        <SideMenu />
        <div class="max-w-full w-full px-4 py-4">
            <slot />
        </div>
    </main>
</template>