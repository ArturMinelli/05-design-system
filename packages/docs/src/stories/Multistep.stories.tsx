import type { Meta, StoryObj } from '@storybook/react'
import { Box, Multistep, MultistepProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,
  args: {
    stepsAmount: 4,
    currentStep: 1
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {}
