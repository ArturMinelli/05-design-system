import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  stepsAmount: number
  currentStep?: number
}

export function MultiStep({ stepsAmount, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {stepsAmount}
      </Label>

      <Steps css={{ '--steps-amount': stepsAmount }}>
        {Array.from({ length: stepsAmount }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
