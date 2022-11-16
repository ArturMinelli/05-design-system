import { X } from 'phosphor-react';
import { useState, useEffect, useRef } from 'react'
import { ToastProvider, ToastRoot, ToastTitle, ToastDescription, ToastViewport, ToastClose } from './styles';

export interface ToastProps {
  title: string;
  description: string;
}

export function Toast({ title, description }: ToastProps) {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);

 useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider swipeDirection="right">
      <button
        onClick={() => setOpen(true)}
      >
        Agendar
      </button>

      <ToastRoot open={open} onOpenChange={setOpen}>
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
