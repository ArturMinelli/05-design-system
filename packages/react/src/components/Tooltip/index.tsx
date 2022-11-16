import { TooltipArrow, TooltipContent } from "./styles";

export interface TooltipProps {
  date: string;
  isAvailable: boolean;
}

export function Tooltip({ date, isAvailable }: TooltipProps) {
  return (
    <TooltipContent sideOffset={2}>
      {date} - {isAvailable ? 'Disponível' : 'Indisponível'}
      <TooltipArrow />
    </TooltipContent>
  )
}