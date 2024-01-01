import type { Block } from 'payload/types'

export const ThreeCardBlock: Block = {
  fields: [
    {
      name: 'cardType',
      label: 'Get content from',
      defaultValue: 'accomodation',
      required: true,
      options: [
        {
          label: 'Accommodation',
          value: 'accomodation',
        },
      ],
      type: 'select',
    },
  ],
  slug: 'ThreeCardBlock',
}

