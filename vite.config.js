import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    
    //SOLUCIÓN AL ERROR: Asegura que el módulo se carga correctamente.
    deps: {
      inline: ['/src/utils/UserPostsService.js'], 
    }
  },
})
