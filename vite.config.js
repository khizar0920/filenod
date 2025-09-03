import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
<<<<<<< HEAD
   resolve: {
    alias: {
      '@': '/src', // This tells Vite that '@' maps to 'src' directory
    },
  },
=======
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
})
