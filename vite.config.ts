import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js and React Three Fiber (largest dependencies)
          "three-vendor": ["three", "@react-three/fiber"],
          // Separate GSAP animation library
          "animation-vendor": ["gsap"],
          // Separate React core
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
    // Increase chunk size warning limit temporarily
    chunkSizeWarningLimit: 600,
  },
});
