import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "",
  plugins: [
    react(),
    legacy({
      modernTargets: "edge>=79, firefox>=67, chrome>=64, safari>=12, chromeAndroid>=64, iOS>=12",
      modernPolyfills: true,
      renderLegacyChunks: false,
    })
  ],
})
