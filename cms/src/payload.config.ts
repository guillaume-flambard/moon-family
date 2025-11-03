import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import Users from './collections/Users';

export default buildConfig({
  collections: [
    Users,
    {
      slug: 'menu-items',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'nameTranslations',
          type: 'group',
          fields: [
            { name: 'en', type: 'text', label: 'English' },
            { name: 'th', type: 'text', label: 'Thai' },
            { name: 'fr', type: 'text', label: 'French' },
            { name: 'de', type: 'text', label: 'German' },
            { name: 'ru', type: 'text', label: 'Russian' },
            { name: 'my', type: 'text', label: 'Myanmar' },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'descriptionTranslations',
          type: 'group',
          fields: [
            { name: 'en', type: 'textarea', label: 'English' },
            { name: 'th', type: 'textarea', label: 'Thai' },
            { name: 'fr', type: 'textarea', label: 'French' },
            { name: 'de', type: 'textarea', label: 'German' },
            { name: 'ru', type: 'textarea', label: 'Russian' },
            { name: 'my', type: 'textarea', label: 'Myanmar' },
          ],
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'price2',
          type: 'number',
          label: 'Alternative Price (THB)',
          min: 0,
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: 'Stir Fried', value: 'stir-fried' },
            { label: 'Deep Fried', value: 'deep-fried' },
            { label: 'Soup', value: 'soup' },
            { label: 'Salad', value: 'salad' },
            { label: 'Dessert', value: 'dessert' },
            { label: 'Drinks', value: 'drinks' },
            { label: 'Cocktails', value: 'cocktails' },
            { label: 'Fusion', value: 'fusion' },
          ],
        },
        {
          name: 'spicy',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'vegetarian',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'venue',
          type: 'select',
          required: true,
          options: [
            { label: 'Mama Homemade', value: 'mama-homemade' },
            { label: 'Moon Spoon', value: 'moon-spoon' },
            { label: 'Moonland Bar', value: 'moonland-bar' },
          ],
        },
        {
          name: 'order',
          type: 'number',
          label: 'Display Order',
          admin: {
            description: 'Lower numbers appear first',
          },
        },
      ],
    },
    {
      slug: 'events',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'titleTranslations',
          type: 'group',
          fields: [
            { name: 'en', type: 'text', label: 'English' },
            { name: 'th', type: 'text', label: 'Thai' },
            { name: 'fr', type: 'text', label: 'French' },
            { name: 'de', type: 'text', label: 'German' },
            { name: 'ru', type: 'text', label: 'Russian' },
            { name: 'my', type: 'text', label: 'Myanmar' },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'descriptionTranslations',
          type: 'group',
          fields: [
            { name: 'en', type: 'textarea', label: 'English' },
            { name: 'th', type: 'textarea', label: 'Thai' },
            { name: 'fr', type: 'textarea', label: 'French' },
            { name: 'de', type: 'textarea', label: 'German' },
            { name: 'ru', type: 'textarea', label: 'Russian' },
            { name: 'my', type: 'textarea', label: 'Myanmar' },
          ],
        },
        {
          name: 'eventDate',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'endDate',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
        {
          name: 'eventType',
          type: 'select',
          required: true,
          options: [
            { label: 'Live Music', value: 'live-music' },
            { label: 'DJ Set', value: 'dj-set' },
            { label: 'Party', value: 'party' },
            { label: 'Special Event', value: 'special' },
            { label: 'Weekly Event', value: 'weekly' },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'featured',
          type: 'checkbox',
          label: 'Featured Event',
          defaultValue: false,
        },
        {
          name: 'ticketLink',
          type: 'text',
          label: 'Ticket/Registration Link',
        },
      ],
      defaultSort: 'eventDate',
    },
    {
      slug: 'gallery-images',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: 'Food', value: 'food' },
            { label: 'Restaurant', value: 'restaurant' },
            { label: 'Bar', value: 'bar' },
            { label: 'Events', value: 'events' },
            { label: 'Nightlife', value: 'nightlife' },
            { label: 'Cocktails', value: 'cocktails' },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'venue',
          type: 'select',
          required: true,
          options: [
            { label: 'Mama Homemade', value: 'mama-homemade' },
            { label: 'Moon Spoon', value: 'moon-spoon' },
            { label: 'Moonland Bar', value: 'moonland-bar' },
          ],
        },
        {
          name: 'order',
          type: 'number',
          label: 'Display Order',
        },
      ],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
  ],
  admin: {
    user: Users.slug,
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/moon-family-cms',
  }),
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
});

