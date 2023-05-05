import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://nc0.fr",
  experimental: {
    assets: true
  },
  integrations: [tailwind(), react()]
});