import type { CollectionConfig } from 'payload/types'

import { HeroBlock } from '../blocks/HeroBlock'
import { HeadingBlock } from '../blocks/HeadingBlock'
import { ImageListBlock } from '../blocks/ImageListBlock'
import { CarouselBlock } from '../blocks/CarouselBlock'
import { ThreeCardBlock } from '../blocks/ThreeCardBlock'
import { ReviewBlock } from '../blocks/ReviewBlock'

import { slugField } from '../../fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [ 
        // {
        // label: 'Hero',
        //   fields: [
        //     {
        //       name: 'heroTitle',
        //       type: 'text',
        //       label: "Text",
        //     }
        //   ]
        // },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [HeroBlock, HeadingBlock, ImageListBlock, CarouselBlock, ThreeCardBlock, ReviewBlock],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
