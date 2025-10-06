import { defineConfig } from 'vite'

export default defineConfig({
  base: '/js_example/',
  build: {
    outDir: 'docs',  // build output folder
    emptyOutDir: true // clean folder before build
  }
})