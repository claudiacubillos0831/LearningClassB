import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" para que funcione tanto en servidor local como en hosting estatico (GitHub Pages, etc.)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
