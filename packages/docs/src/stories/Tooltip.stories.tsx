import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Box, Button } from '@arturmp-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    asChild: true,
    date: '10 de outubro',
    isAvailable: true,
    sideOffset: -16,
    children: (
      <Button>
        Hi there
      </Button>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$16',
            gap: '$2'
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
