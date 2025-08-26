import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    port: 5174,  // o el puerto que prefieras
    strictPort: true // hace que falle si el puerto está ocupado
  }
})
