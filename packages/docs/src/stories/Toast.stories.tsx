import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Box } from '@arturmp-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado!',
    description: 'Quarta-feira, 10 de outubro às 16h',
    open: true,
  },
  decorators: [
    (Story) => {
      return (
        <>
          {Story()}
        </>
      )
    }
  ]
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
