import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Box } from '@arturmp-ignite-ui/react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { colors, fonts, radii, lineHeights } from '@arturmp-ignite-ui/tokens'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    date: '10 de outubro',
    isAvailable: true,
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
          <RadixTooltip.Provider>
            <RadixTooltip.Root>
              <div style={{
                width: 66,
                height: 58,
                borderRadius: radii.md,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.gray600,
              }}>
                <RadixTooltip.Trigger asChild>
                  <button style={{
                    all: 'unset',
                    color: colors.white,
                    font: fonts.default,
                    lineHeight: lineHeights.base,
                  }}>
                    10
                  </button>
                </RadixTooltip.Trigger>
              </div>
              <RadixTooltip.Portal>
                {Story()}
              </RadixTooltip.Portal>
            </RadixTooltip.Root>
          </RadixTooltip.Provider>
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
