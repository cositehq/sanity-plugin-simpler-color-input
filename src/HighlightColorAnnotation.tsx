import {BlockAnnotationProps} from 'sanity'
import styled from 'styled-components'

const ColorSpan = styled.span<{color: string}>`
  & > span {
    background-color: ${({color}) => color};
    border-bottom: unset;
    color: inherit;
  }
`

export const HighlightColorAnnotation = (props: BlockAnnotationProps) => (
  <ColorSpan color={(props.value?.value as unknown as string) || ''}>
    {props.renderDefault(props)}
  </ColorSpan>
)
