import type { Block, Field } from 'payload/types'

const carouselField: Field[] = [
  {
    name: 'media',
    relationTo: 'media',
    required: true,
    type: 'upload',
  },
  {
    name: 'title',
    type: 'text',
    label: "Title",
    required: true,
  },
  {
    name: 'secondary',
    type: 'text',
    label: "Secondary Text",
    required: true,
  },
]

export const CarouselBlock: Block = {
  fields: [
    {
      name: 'autoPlay',
      type: 'checkbox',
    },
    {
      name: 'CarouselField',
      fields: carouselField,
      type: 'array',
      minRows: 4,
    },
  ],
  slug: 'Carousel',
}
