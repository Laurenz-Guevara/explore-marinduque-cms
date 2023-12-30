import { Block } from 'payload/types'

export const HeadingBlock: Block = {
  slug: 'Heading', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'HeadingBlock', // optional
  fields: [
    {
      name: 'headingOne',
      type: 'text',
      label: "Heading One",
      required: true,
    },
    {
      name: 'headingTwo',
      type: 'text',
      label: "Main Heading",
      required: true,
    }
  ],
}

