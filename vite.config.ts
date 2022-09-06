import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  ssr: {
    noExternal: [
      "@felte/reporter-solid",
      "solid-toast",
      "@solid-aria/overlays",
    ],
  },
});
