import {type BlockAnnotationProps} from 'sanity'
import styled from 'styled-components'

const ColorSpan = styled.span<{color: string}>`
  & > span {
    background-color: inherit;
    border-bottom: unset;
    color: ${({color}) => color};
  }
`

export const TextColorAnnotation = (props: BlockAnnotationProps) => (
  <ColorSpan color={(props.value?.['value'] as unknown as string) || ''}>
    {props.renderDefault(props)}
  </ColorSpan>
)
