import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { comlink } from "vite-plugin-comlink";

export default defineConfig({
  plugins: [react(), comlink(), VitePWA({ registerType: "autoUpdate" })],
  worker: {
    format: "es",
    plugins: () => [comlink()],
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
