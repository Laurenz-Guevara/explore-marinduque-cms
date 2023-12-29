import type { CollectionConfig } from 'payload/types'

import { QuoteBlock } from '../blocks/QuoteBlock'
import { HeroBlock } from '../blocks/Hero'
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
              blocks: [QuoteBlock, HeroBlock],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
