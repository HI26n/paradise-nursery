import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is set to the repo name so GitHub Pages serves assets from the right path.
// Change '/paradise-nursery/' if you name your repository something else.
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/',
})
