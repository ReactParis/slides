import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactDeck from "vite-plugin-react-deck";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactDeck({
      rehypePlugins: [],
      remarkPlugins: [],
      theme: "purple",
    }),
  ],
});
