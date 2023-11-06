import {defineType} from 'sanity'
import {BiHighlight} from 'react-icons/bi'

import {HighlightColorAnnotation} from '../HighlightColorAnnotation'
import {SimplerColorInput} from '../ColorInput'

export const highlightColor = defineType({
  title: 'Highlight color',
  type: 'object',
  name: 'highlightColor',
  icon: BiHighlight,
  components: {
    annotation: HighlightColorAnnotation,
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
