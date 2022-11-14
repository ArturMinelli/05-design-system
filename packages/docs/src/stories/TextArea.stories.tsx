import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextArea, TextAreaProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations..."
  }
}