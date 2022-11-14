import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps, Text, Box } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your email',
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  }
}
