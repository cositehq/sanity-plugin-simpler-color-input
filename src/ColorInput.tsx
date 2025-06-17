import {ChevronDownIcon, SearchIcon} from '@sanity/icons'
import {CloseIcon} from '@sanity/icons'
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Inline,
  Popover,
  Stack,
  Text,
  TextInput,
} from '@sanity/ui'
import {type ColorResult, type HsvaColor} from '@uiw/react-color'
import {type RefObject, useCallback, useEffect, useRef, useState} from 'react'
import {type ObjectInputProps, type ObjectOptions, type ObjectSchemaType, set, unset} from 'sanity'

export interface SimplerColorType {
  label: string
  value: string
  _type?: string // included in textColor and highlightColor annotation types
  _key?: string // included in textColor and highlightColor annotation types
}

export type ColorFormatType = 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla'

export interface ColorOptions extends Omit<ObjectOptions, 'columns'> {
  colorList?: Array<SimplerColorType>
  colorFormat?: ColorFormatType
  defaultColorList?: Array<SimplerColorType>
  defaultColorFormat?: ColorFormatType
  enableSearch?: boolean
  showColorValue?: boolean
}

export type SimplerColorSchemaType = Omit<ObjectSchemaType, 'options'> & {
  options?: ColorOptions
}
export type SimplerColorInputProps = ObjectInputProps<SimplerColorType, SimplerColorSchemaType>

export const SimplerColorInput = (props: ObjectInputProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [pickerIsOpen, setPickerIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const {onChange} = props
  const value = props.value as SimplerColorType | undefined
  const type = props.schemaType as SimplerColorSchemaType
  const showColorValue = Boolean(type.options?.showColorValue ?? true)
  const [selectedColor, setSelectedColor] = useState<Partial<SimplerColorType> | undefined>(value)

  const handleChange = useCallback(
    (color: SimplerColorType) => {
      setSelectedColor(color)
      setIsOpen(false)
      onChange(set({...props.value, ...color}))
    },
    [onChange, props.value],
  )

  const colorList: SimplerColorType[] =
    type.options?.colorList || type.type?.options?.defaultColorList
  const colorFormat = type.options?.colorFormat ?? type.type?.options?.defaultColorFormat
  const enableSearch = Boolean(type.options?.enableSearch ?? type.type?.options?.enableSearch)

  const filteredColorList = searchValue.length
    ? colorList?.filter((color) => {
        return color.label.toLowerCase().includes(searchValue.toLowerCase())
      })
    : colorList

  const handlePickerChange = (color: ColorResult) => {
    let colorValue: string

    switch (colorFormat) {
      case 'hexa':
        colorValue = color.hexa
        break
      case 'rgb':
        colorValue = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
        break
      case 'rgba':
        colorValue = `rgba(${color.rgba.r}, ${color.rgba.g}, ${
          color.rgba.b
        }, ${color.rgba.a.toFixed(2)})`
        break
      case 'hsl':
        colorValue = `hsl(${color.hsl.h.toFixed(0)}, ${color.hsl.s.toFixed(
          0,
        )}%, ${color.hsl.l.toFixed(0)}%)`
        break
      case 'hsla':
        colorValue = `hsla(${color.hsla.h.toFixed(0)}, ${color.hsla.s.toFixed(
          0,
        )}%, ${color.hsla.l.toFixed(0)}%, ${color.hsla.a.toFixed(2)})`
        break
      default:
        colorValue = color.hex
        break
    }

    const formattedColor = {
      label: 'Custom',
      value: colorValue,
    }
    setSelectedColor(formattedColor)
    onChange(set({...props.value, ...formattedColor}))
  }

  const ref: RefObject<HTMLDivElement> = useRef(null)
  useEffect(() => {
    if (!isOpen) setSearchValue('')

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setPickerIsOpen(false)
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [isOpen, pickerIsOpen, ref])

  /* @ts-expect-error we can assume type exists */
  const isRequired: boolean = type.validation[0]._required === 'required'

  const [Component, setComponent] = useState(<div>Loading...</div>)

  useEffect(() => {
    import('@uiw/react-color').then((module) => {
      const {Chrome, rgbStringToHsva, hslStringToHsva} = module

      // convert rgb and hsl strings to hsva so they can be read by the picker successfully
      let pickerColor: string | HsvaColor = selectedColor?.value || '#ffffff'
      if (pickerColor.startsWith('rgb')) pickerColor = rgbStringToHsva(pickerColor)
      else if (pickerColor.startsWith('hsl')) pickerColor = hslStringToHsva(pickerColor)

      setComponent(
        <Container>
          <Popover
            ref={ref}
            content={
              <Chrome
                onChange={handlePickerChange}
                color={pickerColor}
                showAlpha={colorFormat ? colorFormat.slice(-1) === 'a' : false}
              />
            }
            portal
            open={pickerIsOpen}
          >
            <Flex>
              <Button
                style={{
                  width: '100%',
                  textAlign: 'center',
                  borderTopRightRadius: isRequired ? '' : '0',
                  borderBottomRightRadius: isRequired ? '' : '0',
                  flexShrink: 1,
                  overflow: 'hidden',
                }}
                mode="ghost"
                padding={2}
                onClick={() =>
                  colorList && colorList.length > 0
                    ? setIsOpen(!isOpen)
                    : setPickerIsOpen(!pickerIsOpen)
                }
              >
                <Flex style={{width: '100%'}} gap={4}>
                  <Flex style={{overflow: 'hidden', flexGrow: 1}} align="center" gap={1}>
                    <Box style={{flexShrink: 0}}>
                      <Card
                        style={{backgroundColor: selectedColor?.value || '#ffffff'}}
                        radius={2}
                        shadow={1}
                        padding={2}
                        margin={1}
                      />
                    </Box>
                    <Box
                      style={{
                        fontWeight: 600,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        ...(showColorValue && {flexShrink: 0}),
                      }}
                    >
                      {selectedColor?.label || 'Select a color...'}{' '}
                    </Box>
                    {showColorValue && (
                      <Box style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                        {selectedColor?.value}
                      </Box>
                    )}
                  </Flex>
                  <ChevronDownIcon style={{flexShrink: 0}} width={32} height={32} />
                </Flex>
              </Button>
              {!isRequired && (
                <Button
                  mode="ghost"
                  onClick={() => {
                    if (value !== undefined && value._key) {
                      // we need to handle annotations differently to
                      // prevent errors in the Portable Text editor
                      const annotationValue = {_type: value._type, _key: value._key}
                      setSelectedColor(annotationValue)
                      onChange(set(annotationValue))
                    } else {
                      setSelectedColor(undefined)
                      onChange(unset())
                    }
                  }}
                  style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}
                >
                  <Inline space={1}>
                    <CloseIcon width={24} height={24} />
                    <Text weight="semibold">Clear</Text>
                  </Inline>
                </Button>
              )}
            </Flex>
          </Popover>
          {isOpen && colorList && (
            <Card radius={2} shadow={3} marginTop={1} overflow="hidden">
              {enableSearch && (
                <Box
                  padding={3}
                  style={{
                    borderBottom: '1px solid var(--card-border-color)',
                  }}
                >
                  <TextInput
                    icon={SearchIcon}
                    radius={2}
                    placeholder="Search"
                    onChange={(event) => {
                      setSearchValue(event.currentTarget.value)
                    }}
                    autoFocus
                  />
                </Box>
              )}
              <Stack>
                {filteredColorList?.map((color: SimplerColorType) =>
                  color.value === 'custom' ? (
                    <Button
                      key={color.label}
                      radius={0}
                      mode="bleed"
                      onClick={() => {
                        setIsOpen(false)
                        setPickerIsOpen(true)
                      }}
                    >
                      <Text>{color.label}</Text>
                    </Button>
                  ) : (
                    <Button
                      key={color.label}
                      radius={0}
                      mode="bleed"
                      onClick={() => handleChange(color)}
                    >
                      <Box>
                        <Inline space={3}>
                          <Card
                            style={{backgroundColor: color.value, width: '16px', height: '16px'}}
                            radius={2}
                            shadow={1}
                          />
                          <Text>{color.label}</Text>
                        </Inline>
                      </Box>
                    </Button>
                  ),
                )}
              </Stack>
            </Card>
          )}
        </Container>,
      )
    })
  }, [isOpen, selectedColor, searchValue, pickerIsOpen])

  return Component
}
