import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { comlink } from "vite-plugin-comlink";

export default defineConfig({
  plugins: [
    react(),
    comlink(),
    VitePWA({
      registerType: "autoUpdate",

      devOptions: {
        enabled: true
      },

      manifest: {
        "short_name": "Indire",
        "name": "Indire Application ",
        "lang": "pt",
        "description": "Application Made to Indire Company",
        "screenshots": [
          {
            "src": "INDIRE_SCREEN_SHOT_screenshot.png",
            "sizes": "640x320",
            "type": "image/png",
            "form_factor": "wide"
          },
          {
            "src": "INDIRE_SCREEN_SHOT_screenshot.png",
            "sizes": "640x320",
            "type": "image/png",
          
          }
        ],
        "icons": [
          {
            "src": "./android/android-launchericon-512-512.png",
            "sizes": "512x512"
          },
          {
            "src": "./android/android-launchericon-192-192.png",
            "sizes": "192x192"
          },
          {
            "src": "./android/android-launchericon-144-144.png",
            "sizes": "144x144"
          },
          {
            "src": "./android/android-launchericon-96-96.png",
            "sizes": "96x96"
          },
          {
            "src": "./android/android-launchericon-72-72.png",
            "sizes": "72x72"
          },
          {
            "src": "./android/android-launchericon-48-48.png",
            "sizes": "48x48"
          }
        ],
        "start_url": "/",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
/*         runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
        ], */
      },
    }),
  ],
  worker: {
    format: "es",
/*     plugins: () => [comlink()], */
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "assets/[name]-worker.js", // Personaliza el nombre de salida
      },
    },
  },
  build: {
    outDir: "build",
    minify: "esbuild",
  
    rollupOptions: {
      output: {
        format: "es",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
});
