// vite.config.js
import { resolve } from 'path'
import dts from "vite-plugin-dts"
import { defineConfig } from 'vite'
export default defineConfig({
    plugins: [dts()],
  build: {
    lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es'],
        name: 'EUPluginSDK',
    }
  }
})