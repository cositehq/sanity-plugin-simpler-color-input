import {definePlugin} from 'sanity'
import {simplerColor} from './schemas/simplerColor'

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
export const simplerColorInput = definePlugin({
  name: 'sanity-plugin-simpler-color-input',
  schema: {
    types: [simplerColor],
  },
})

export {SimplerColorInput} from './ColorInput'
export type {SimplerColorInputProps, SimplerColorSchemaType, SimplerColorType} from './ColorInput'
