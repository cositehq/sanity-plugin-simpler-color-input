import {ChevronDownIcon} from '@sanity/icons'
import {Box, Button, Card, Container, Flex, Inline, Popover, Stack, Text} from '@sanity/ui'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {ObjectInputProps, ObjectOptions, ObjectSchemaType, set, unset} from 'sanity'
import {ChromePicker, RGBColor} from 'react-color'
import {CloseIcon} from '@sanity/icons'
import styled from 'styled-components'

export interface SimplerColorType {
  label: string
  value: string
  _type?: string // included in textColor and highlightColor annotation types
  _key?: string // included in textColor and highlightColor annotation types
}

export interface ColorOptions extends Omit<ObjectOptions, 'columns'> {
  colorList?: Array<SimplerColorType>
  enableAlpha?: boolean
  defaultColorList?: Array<SimplerColorType>
  defaultEnableAlpha?: boolean
}

export type SimplerColorSchemaType = Omit<ObjectSchemaType, 'options'> & {
  options?: ColorOptions
}
export type SimplerColorInputProps = ObjectInputProps<SimplerColorType, SimplerColorSchemaType>

export const SimplerColorInput = (props: ObjectInputProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [pickerIsOpen, setPickerIsOpen] = useState(false)
  const {onChange} = props
  const value = props.value as SimplerColorType | undefined
  const type = props.schemaType as SimplerColorSchemaType
  const [selectedColor, setSelectedColor] = useState<Partial<SimplerColorType> | undefined>(value)

  const handleChange = useCallback(
    (color: SimplerColorType) => {
      setSelectedColor(color)
      setIsOpen(false)
      onChange(set({...props.value, ...color}))
    },
    [onChange, props.value]
  )

  const colorList = type.options?.colorList || type.type?.options?.defaultColorList
  const enableAlpha = type.options?.enableAlpha ?? type.type?.options?.defaultEnableAlpha

  const handleChange2 = (color: {rgb: RGBColor}) => {
    const {r, g, b, a} = color.rgb
    const rgb = `rgb(${r}, ${g}, ${b})`
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`
    const formattedColor = {
      label: 'Custom',
      value: enableAlpha ? rgba : rgb,
    }
    setSelectedColor(formattedColor)
  }
  const handleChangeComplete = (color: {rgb: RGBColor}) => {
    const {r, g, b, a} = color.rgb
    const rgb = `rgb(${r}, ${g}, ${b})`
    const rgba = `rgba(${r}, ${g}, ${b}, ${a})`
    const formattedColor = {
      label: 'Custom',
      value: enableAlpha ? rgba : rgb,
    }
    setSelectedColor(formattedColor)
    onChange(set({...props.value, ...formattedColor}))
  }

  const ref: React.RefObject<HTMLDivElement> = useRef(null)
  useEffect(() => {
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

  const ChromePickerWrapper = styled.div`
    .chrome-picker {
      background: inherit !important;
    }

    input {
      color: inherit !important;
    }
  `

  return (
    <Container>
      <Popover
        ref={ref}
        content={
          <ChromePickerWrapper>
            <ChromePicker
              onChange={handleChange2}
              onChangeComplete={handleChangeComplete}
              color={selectedColor?.value}
              disableAlpha={!enableAlpha}
            />
          </ChromePickerWrapper>
        }
        portal
        open={pickerIsOpen}
      >
        <Flex>
          <Button
            style={{
              width: '100%',
              textAlign: 'center',
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
            }}
            mode="ghost"
            padding={2}
            onClick={() =>
              colorList && colorList.length > 0
                ? setIsOpen(!isOpen)
                : setPickerIsOpen(!pickerIsOpen)
            }
          >
            <Inline space={4}>
              <Inline space={1}>
                <Box>
                  <Card
                    style={{backgroundColor: selectedColor?.value || '#ffffff'}}
                    radius={2}
                    shadow={1}
                    padding={2}
                    margin={1}
                  />
                </Box>
                <Text weight="semibold">{selectedColor?.label || 'Select a color...'} </Text>
                <Text>{selectedColor?.value}</Text>
              </Inline>
              <ChevronDownIcon width={32} height={32} />
            </Inline>
          </Button>
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
        </Flex>
      </Popover>
      {isOpen && colorList && (
        <Card radius={2} shadow={3} marginTop={1} overflow="hidden">
          <Stack>
            {colorList?.map((color: SimplerColorType) =>
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
              )
            )}
          </Stack>
        </Card>
      )}
    </Container>
  )
}
