import type { GlobalConfig } from 'payload/types'

const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
  read: () => true,
  }, 
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

export default Hero

