import { z, defineCollection } from "astro:content";

const menuCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    categories: z.array(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        items: z.array(
          z.object({
            name: z.string(),
            price: z.string().optional(),
            description: z.string().optional(),
            note: z.string().optional(),
          })
        ),
      })
    ),
  }),
});

export const collections = {
  menu: menuCollection,
};
