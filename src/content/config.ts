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

const pressCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      source: z.string(),
      date: z.string(),
      img: image(),
      imgAlt: z.string(),
      featured: z.boolean().optional(),
    }),
});

export const collections = {
  menu: menuCollection,
  test: pressCollection,
};
