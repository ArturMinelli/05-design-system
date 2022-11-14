import { Label, MultistepContainer, Step, Steps } from "./styles"

export interface MultistepProps {
  stepsAmount: number;
  currentStep: number;
}

export function Multistep({ stepsAmount, currentStep=1 }: MultistepProps) {
  return (
    <MultistepContainer>
      <Label>
        Passo {currentStep} de { stepsAmount }
      </Label>
      <Steps css={{ '--steps-amount': stepsAmount }}>
        {Array.from({ length: stepsAmount }).map((_, index) => {
          return (
            <Step key={index} active={index < currentStep} />
          )
        })}
      </Steps>
    </MultistepContainer>
  )
}

Multistep.displayName = 'Multistep'
