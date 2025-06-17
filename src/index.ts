import {definePlugin} from 'sanity'

import {type ColorFormatType} from './ColorInput'
import {highlightColor} from './schemas/highlightColor'
import {simplerColor} from './schemas/simplerColor'
import {textColor} from './schemas/textColor'

interface SimplerColorInputConfig {
  defaultColorList?: Array<{label: string; value: string}>
  defaultColorFormat?: ColorFormatType // defaults to 'hex'
  enableSearch?: boolean // defaults to false
  showColorValue?: boolean // default to true
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [simplerColorInput()],
 * })
 * ```
 */
export const simplerColorInput = definePlugin<SimplerColorInputConfig | void>((options) => {
  return {
    name: 'sanity-plugin-simpler-color-input',
    schema: {
      types: [
        {...simplerColor, options},
        {...textColor, options},
        {...highlightColor, options},
      ],
    },
  }
})

export type {SimplerColorInputProps, SimplerColorSchemaType, SimplerColorType} from './ColorInput'
export {SimplerColorInput} from './ColorInput'
