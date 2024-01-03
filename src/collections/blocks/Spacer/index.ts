import type { Block } from 'payload/types'

export const Spacer: Block = {
  slug: 'Spacer',
  fields: [
    {
      name: 'spacer',
      label: 'Spacer',
      defaultValue: 'small',
      required: true,
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
      type: 'select',
    },
  ],
}

