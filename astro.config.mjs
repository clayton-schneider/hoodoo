import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://www.sitegoeshere.com",
  image: {
    service: sharpImageService(),
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: "/assets/*",
        },
      ],
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["@splidejs/splide"],
    },
  },
});
