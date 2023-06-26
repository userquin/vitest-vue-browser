/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    globals: true,
    browser: {
      enabled: true,
      enableUI: true,
      headless: false,
      name: 'chrome',
      provider: process.env.BROWSER_PROVIDER || 'none',
    },
  },
})
