import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/rome-pantheon-timeline/",
  plugins: [react()],
})
