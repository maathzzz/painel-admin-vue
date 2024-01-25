<script setup lang="ts">

</script>

<template>
    <main class="w-full h-screen flex justify-center items-center">
        <div class="bg-white w-[25rem] h-[25rem] rounded-2xl flex flex-col justify-center items-center gap-6">
            <span class="text-[#141414] text-xl font-semibold"> Login - Painel Admin </span>
            <form class="flex flex-col gap-5">
                <label
                    for="email"
                    class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <input
                        type="text"
                        id="email"
                        class="peer text-black text-sm font-medium p-3 border-none bg-transparent placeholder-transparent w-[15rem] h-[2.3rem] focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="E-mail"
                    />

                    <span
                        class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        E-mail
                    </span>
                </label>

                <label
                    for="password"
                    class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <input
                        type="password"
                        id="password"
                        class="peer text-black text-sm font-medium p-3 border-none bg-transparent placeholder-transparent w-[15rem] h-[2.3rem] focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Senha"
                    />

                    <span
                        class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        Senha
                    </span>
                </label>

                <button type="submit" @click="" class="w-full h-7 disabled:grayscale bg-green-500 rounded">Entrar</button>
            </form>
        </div>
    </main>
</template>

<style scoped> 
</style>