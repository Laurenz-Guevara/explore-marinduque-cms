import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: `https://explore-marinduque.s3.eu-west-2.amazonaws.com`,
    staticDir: path.resolve(__dirname, '../../../media'),
    disableLocalStorage: true,
    // imageSizes: [
    //   {
    //     height: 400,
    //     width: 400,
    //     crop: 'center',
    //     name: 'thumbnail',
    //   },
    // ],
    adminThumbnail: ({ doc }) => `https://explore-marinduque.s3.eu-west-2.amazonaws.com/${doc.filename}`,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}

