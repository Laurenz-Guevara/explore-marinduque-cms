import { Block } from 'payload/types'

export const HeroBlock: Block = {
  slug: 'Hero', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'Heroblock', // optional
  fields: [
    {
      name: 'headingOne',
      type: 'text',
      label: "Heading One",
      required: true,
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: "Main Heading",
      required: true,
    }
  ],
}

