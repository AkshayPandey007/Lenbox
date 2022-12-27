import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    VitePWA({ registerType: 'autoUpdate',
    injectRegister: 'auto',
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/th.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512x512-logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
  
})
