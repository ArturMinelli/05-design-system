import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Button } from '@arturmp-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState<boolean>(false)

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>
            Show toast
          </Button>
          <Story args={{
            title: 'Agendamento realizado!',
            description: 'Quarta-feira, 10 de outubro às 16h',
            open: isOpen,
            onOpenChange: () => setIsOpen(false)
          }}/>
        </>
      )
    }
  ]
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
