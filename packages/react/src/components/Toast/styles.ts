import * as RadixToast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(RadixToast.Provider, {

})

export const ToastRoot = styled(RadixToast.Root, {
  position: 'relative',
  backgroundColor: '$gray800',
  padding: '$4',
  paddingRight: '$20',
  borderRadius: '$sm'
})

export const ToastTitle = styled(RadixToast.Title, {
  color: '$white',
  lineHeight: '$tall',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastDescription = styled(RadixToast.Description, {
  color: '$gray200',
  lineHeight: '$short',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const ToastClose = styled(RadixToast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$3',
  background: 'transparent',
  border: 0,
  lineHeight: 0,

  svg: {
    color: '$gray500'
  }
})
export const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$8'
})

