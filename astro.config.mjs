import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
