import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? "pwa-react-test"
    : "./",
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['vite.svg'],
    injectRegister: 'auto',
    manifest: {
      name: 'PWA BLE Apps',
      short_name: 'WepBLEApps',
      description: 'PWA WEB BLE',
      theme_color: '#2f2f2f',
      icons: [
        {
          src: 'vite.svg',
          sizes: '192x192',
          type: 'image/svg+xml'
        },
      ]
    }
  })],
})
