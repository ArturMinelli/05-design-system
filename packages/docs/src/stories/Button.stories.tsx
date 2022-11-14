import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: "Send"
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    disabled: false,
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: "Create new",
    disabled: false,
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: "Cancel",
    disabled: false,
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    disabled: false,
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold'/>
      </>
    ),
    disabled: false,
  }
}
