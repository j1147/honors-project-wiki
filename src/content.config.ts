import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

import { Image } from 'astro:assets';

import badDrawing from '../src/assets/baddrawing.png';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
