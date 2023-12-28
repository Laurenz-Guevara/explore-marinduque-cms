import type { GlobalConfig } from 'payload/types'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: "Text",
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: "Link",
          required: true,
        },
      ],
    },
  ],
}

export default Header
