import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, minus nesciunt. Consectetur sit earum temporibus illum animi ipsa odio voluptate cupiditate consequuntur. Perspiciatis sapiente suscipit veniam asperiores facere, ut ipsam."
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: 'strong'
  }
}
