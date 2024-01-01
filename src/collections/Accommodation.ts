import type { CollectionConfig } from 'payload/types'

export const Accommodation: CollectionConfig = {
  slug: 'accommodation',
  labels: {
    plural: 'Accommodation'
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'location'],
  },
  fields: [
    {
      name: 'media',
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
      name: 'location',
      type: 'text',
      label: "Location",
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      label: "Star Rating",
      max: 5,
      min: 0,
      required: true,
      admin: {
        step: 0.1,
      }
    },
    {
      name: 'price',
      type: 'number',
      label: "Price",
      required: true,
    }
  ],
}

