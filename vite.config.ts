import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "/Shopping-Cart-demo/";

export default defineConfig({
  base: repoName,
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
