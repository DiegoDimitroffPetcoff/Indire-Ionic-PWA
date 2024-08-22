import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate' }),
  ],
  build: {
    outDir: 'build',
    minify: false,
    rollupOptions: {
      // Para evitar problemas con Web Workers, asegúrate de que los workers se gestionen correctamente
      output: {
        // Cambia el formato a 'es' para ser compatible con code-splitting
        format: 'es', // Asegúrate de que este ajuste esté en el lugar correcto o quítalo si no es necesario

        // Las opciones para los nombres de los archivos
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]', // Asegúrate de que los archivos de recursos se gestionen correctamente
      },
      // Asegúrate de que los workers se gestionen correctamente
      plugins: [
        {
          name: 'vite-plugin-web-worker',
          transform (code, id) {
            if (id.endsWith('?worker')) {
              return {
                code: `export default new Worker(${JSON.stringify(id)})`,
                map: null
              };
            }
          }
        }
      ]
    },
  },
});
