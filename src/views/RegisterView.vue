<script setup lang="ts">
import useRegister from "../composables/useRegister";

const { register, name, email, password, password_confirmation } = useRegister();

const handleRegister = async () => {
	await register();
};

</script>

<template>
  <section class="w-full h-screen flex justify-center">
    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-md">
        <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Criar conta 
        </h1>

        <p class="mt-4 leading-relaxed text-gray-500">
          Painel Administrador - Challenge Labi9 (Vue3)
        </p>

        <form
          action="#"
          class="mt-8 grid grid-cols-6 gap-6"
        >
          <div class="col-span-6">
            <label
              for="Name"
              class="block text-sm font-medium text-gray-700"
            > Nome </label>

            <input
              id="Name"
              v-model="name"
              type="text"
              name="Name"
              placeholder="Digite o nome"
              class="mt-1 w-full py-4 pl-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
          </div>

          <div class="col-span-6">
            <label
              for="Email"
              class="block text-sm font-medium text-gray-700"
            > Email </label>

            <input
              id="Email"
              v-model="email"
              type="email"
              name="email"
              placeholder="Digite o e-mail"
              class="mt-1 w-full py-4 pl-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="Password"
              class="block text-sm font-medium text-gray-700"
            > Senha </label>

            <input
              id="Password"
              v-model="password"
              type="password"
              name="password"
              placeholder="Digite a senha"
              class="mt-1 w-full py-4 pl-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              class="block text-sm font-medium text-gray-700"
            >
              Confirmar a senha
            </label>

            <input
              id="PasswordConfirmation"
              v-model="password_confirmation"
              type="password"
              name="password_confirmation"
              placeholder="Confirme a senha"
              class="mt-1 w-full py-4 pl-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              @click.prevent="handleRegister"
            >
              Cria conta
            </button>

            <p class="text-sm text-gray-500 mt-4 md:mt-0">
              Já possui uma conta?
              <RouterLink
                to="/"
                class="underline"
                href=""
              >
                Entrar
              </RouterLink>
            </p>
          </div>
        </form>
      </div>
    </main>
  </section>
</template>