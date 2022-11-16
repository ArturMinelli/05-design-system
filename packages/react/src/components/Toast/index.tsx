import { X } from 'phosphor-react';
import { useEffect, useRef, ComponentProps } from 'react'
import { ToastProvider, ToastRoot, ToastTitle, ToastDescription, ToastViewport, ToastClose } from './styles';

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string;
  description: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
  const timerRef = useRef(0);

 useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>
          {description}
        </ToastDescription>
        <ToastClose>
          <X weight='bold' size={20}/>
        </ToastClose>
      </ToastRoot>
      <ToastViewport/>
    </ToastProvider>
  );
};
