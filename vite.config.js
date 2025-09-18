// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: "./",
	plugins: [react()],
	build: {
		target: 'es2018',
		sourcemap: false,
		cssCodeSplit: true,
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (
							id.includes('react') ||
							id.includes('react-dom') ||
							id.includes('react-router')
						) return 'react-vendor'
						if (id.includes('gsap')) return 'gsap'
						if (id.includes('swiper')) return 'swiper'
						return 'vendor'
					}
				}
			}
		}
	}
})
