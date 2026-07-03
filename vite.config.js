import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/my-react-app/' : '/',
}))
