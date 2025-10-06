import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'docs',  // build output folder
    emptyOutDir: true // clean folder before build
  }
})