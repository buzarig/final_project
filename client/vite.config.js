import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  // main config object
  root: "src/", // change root path from 'project root' to 'project root/src'
  build: {
    // configure build options
    outDir: "../build", // change build folder to 'docs
    minify: "esbuild" // minify build with 'esbuild
  },
  server: {
    // configure dev server
    host: 'localhost',
    open: true, // open on start
    port: 3000 // port
  },
  plugins: [
    react(),
    { ...eslint({ failOnWarning: false, failOnError: false }) }
  ] // vite plugins
  // base: "/" // configure path to auto-deploy process
});
