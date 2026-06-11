import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})
