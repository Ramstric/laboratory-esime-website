// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({
  schema: z.object({
    titulo: z.string().min(2).max(100),
    descripcion: z.string().max(500),
    fecha: z.string().max(100),
    autor: z.string().max(100),
    tags: z.array(z.string().max(100)),
    img: z.string().url().optional(),
    thumbnail: z.string().url().optional(),
    id: z.string().max(100),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };