import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

import { Image } from 'astro:assets';

import badDrawing from '../src/assets/bad drawing.PNG';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
