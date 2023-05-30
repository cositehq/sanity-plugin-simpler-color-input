import {defineType} from 'sanity'
import {SimplerColorInput} from '../ColorInput'

export const simplerColor = defineType({
  title: 'Simpler Color',
  type: 'object',
  name: 'simplerColor',
  components: {input: SimplerColorInput},
  fields: [
    {
      name: 'label',
      type: 'string',
    },
    {
      name: 'value',
      type: 'string',
    },
  ],
})
