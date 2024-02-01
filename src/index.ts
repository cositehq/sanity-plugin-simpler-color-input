import {definePlugin} from 'sanity'
import {simplerColor} from './schemas/simplerColor'
import {textColor} from './schemas/textColor'
import {highlightColor} from './schemas/highlightColor'
import {ColorFormatType} from './ColorInput'

interface SimplerColorInputConfig {
  defaultColorList?: Array<{label: string; value: string}>
  defaultColorFormat?: ColorFormatType // defaults to 'hex'
  enableSearch?: boolean // defaults to false
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

export {SimplerColorInput} from './ColorInput'
export type {SimplerColorInputProps, SimplerColorSchemaType, SimplerColorType} from './ColorInput'
