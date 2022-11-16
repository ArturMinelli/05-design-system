import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react';
import { TooltipArrow, TooltipContent, TooltipTrigger } from "./styles";

export interface TooltipProps extends ComponentProps<typeof RadixTooltip.Trigger> {
  date: string;
  isAvailable: boolean;
  children: ReactNode;
  sideOffset: number;
}

export function Tooltip({ date, isAvailable, children, sideOffset }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>
        <RadixTooltip.Portal>
        <TooltipContent sideOffset={sideOffset}>
          {date} - {isAvailable ? 'Disponível' : 'Indisponível'}
          <TooltipArrow />
        </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}