import * as RadixTooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(RadixTooltip.Content, {
  padding: '$3 $4',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$medium',
  color: '$gray100',
  backgroundColor: '$gray900'
}
)
export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900'
})
