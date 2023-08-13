import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Jwilimited',

  projectId: 'ltj2mz49',
  dataset: 'jwilimited',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
