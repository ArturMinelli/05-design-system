import { styled } from "../../styles";
import { Text } from "../Text";

export const MultistepContainer = styled('div', {
  width: '100%',
})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs'
  }
})

export const Steps = styled('div', {
  display: 'grid',
  gap: '$2',
  marginTop: '$1',
  gridTemplateColumns: 'repeat(var(--steps-amount), 1fr)'
})

export const Step = styled('div', {
  background: '$gray600',
  borderRadius: "$px",
  height: '$1',

  variants: {
    active: {
      true: {
        background: '$gray100',
      }
    }
  }
})
