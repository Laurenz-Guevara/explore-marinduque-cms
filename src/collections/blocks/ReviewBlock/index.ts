import { Block } from 'payload/types'

export const ReviewBlock: Block = {
  slug: 'Review',
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  labels: {
    singular: 'Review',
    plural: 'Reviews'
  },

  fields: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    {
      name: 'reviewItems',
      labels: {
        singular: 'Review',
        plural: 'Reviews'
      },
      type: 'array',
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'picture',
          relationTo: 'media',
          required: true,
          type: 'upload',
        },
        {
          name: 'name',
          type: 'text',
          label: "Name",
          required: true,
        },
        {
          name: 'review',
          type: 'text',
          label: "Text",
          required: true,
        },
      ],
    },
  ],

}

