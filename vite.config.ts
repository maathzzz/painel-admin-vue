import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Dotenv from 'dotenv-webpack';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), new Dotenv()],
})
