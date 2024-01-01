import type { Block } from 'payload/types'

export const ThreeCardBlock: Block = {
  fields: [
    {
      name: 'cardType',
      label: 'Cards',
      defaultValue: 'accomodation',
      required: true,
      options: [
        {
          label: 'Accommodation Block',
          value: 'accomodation',
        },
      ],
      type: 'select',
    },
  ],
  slug: 'ThreeCardBlock',
}

