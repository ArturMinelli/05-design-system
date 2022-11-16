import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@arturmp-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado!',
    description: 'Quarta-feira, 10 de outubro às 16h'
  },
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
