import {BiFontColor} from 'react-icons/bi'
import {defineType} from 'sanity'

import {SimplerColorInput} from '../ColorInput'
import {TextColorAnnotation} from '../TextColorAnnotation'

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
