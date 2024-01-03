import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';

// Collections
import Users from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Accommodation } from './collections/Accommodation'

// Globals
import Header from './globals/Header'

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Lagalag'
    },
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Pages, Media, Accommodation],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  globals: [Header],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: '*',
  plugins: [
    payloadCloud(),
    cloudStorage({
      collections: {
        media: {
          adapter: adapter,
        },
      },
    }),
  ],
  db: mongooseAdapter({
    connectOptions: {
      dbName: process.env.ENVIRONMENT,
    },
    url: process.env.DATABASE_URI,
  }),
})
