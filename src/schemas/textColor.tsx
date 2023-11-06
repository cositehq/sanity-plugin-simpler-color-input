import {defineType} from 'sanity'
import {BiFontColor} from 'react-icons/bi'

import {TextColorAnnotation} from '../TextColorAnnotation'
import {SimplerColorInput} from '../ColorInput'

export const textColor = defineType({
  title: 'Text color',
  type: 'object',
  name: 'textColor',
  icon: BiFontColor,
  components: {
    annotation: TextColorAnnotation,
    input: SimplerColorInput,
  },
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
