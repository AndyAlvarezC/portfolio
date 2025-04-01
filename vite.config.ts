import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true, // Fuerza a Vite a detectar cambios en archivos
    },
    strictPort: true, // Evita que el puerto cambie automáticamente
  },
})
