<script setup lang="ts">

</script>

<template>
    <section class="">
        <main
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div class="max-w-xl lg:max-w-md">
            <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Criar conta 📑
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500">
              Painel Administrador - Challenge Labi9 (Vue3)
            </p>

            <form action="#" class="mt-8 grid grid-cols-6 gap-6">

              <div class="col-span-6">
                <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 w-full py-2 pl-2 rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  class="mt-1 w-full py-2 pl-2 rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  class="mt-1 w-full py-2 pl-2 rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
                />
              </div>

              <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Cria conta
                </button>
              </div>
            </form>
          </div>
        </main>
    </section>
</template>