import {BiHighlight} from 'react-icons/bi'
import {defineType} from 'sanity'

import {SimplerColorInput} from '../ColorInput'
import {HighlightColorAnnotation} from '../HighlightColorAnnotation'

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
