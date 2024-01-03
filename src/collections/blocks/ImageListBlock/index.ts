import type { Block } from 'payload/types'

export const ImageListBlock: Block = {
  slug: 'ImageListBlock',
  fields: [
    {
      name: 'position',
      label: 'Image Position',
      defaultValue: 'left',
      options: [
        {
          label: 'Left Align',
          value: 'left',
        },
        {
          label: 'Right Align',
          value: 'right',
        },
      ],
      type: 'select',
    },
    {
      name: 'media',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
    {
      name: 'headingOne',
      type: 'text',
      label: "Heading One",
      required: true,
    },
    {
      name: 'paragraphOne',
      type: 'text',
      label: "Paragraph One",
      required: true,
    },
    {
      name: 'headingTwo',
      type: 'text',
      label: "Heading Two",
      required: true,
    },
    {
      name: 'paragraphTwo',
      type: 'text',
      label: "Paragraph Two",
      required: true,
    },
    {
      name: 'headingThree',
      type: 'text',
      label: "Heading Three",
      required: true,
    },
    {
      name: 'paragraphThree',
      type: 'text',
      label: "Paragraph Three",
      required: true,
    },
  ],
}

