import type { GlobalConfig } from 'payload/types'

export const Header: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      relationTo: 'media',
      required: true,
      type: 'upload',
    },

    {
      name: 'footerItems',
      type: 'array',
      maxRows: 8,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: "Text",
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: "Link",
          required: true,
        },
      ],
    },
    {
      name: 'footerText',
      type: 'text',
      required: true,
    },
    {
      name: 'socials',
      type: 'array',
      maxRows: 7,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: "Text",
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: "Link",
          required: true,
        },
        {
          name: 'icon',
          relationTo: 'media',
          required: true,
          type: 'upload',
        },
      ],
    },
  ],
}

export default Header
