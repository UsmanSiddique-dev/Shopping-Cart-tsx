import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "Shopping-Cart-demo";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? `/${repoName}/` : "/",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
