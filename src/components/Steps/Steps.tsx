import React from 'react';
import  * as S from './StyledSteps';

interface StepsProps {
  activeStep: number,
}

const steps = ['1º', '2º', '3º', '4º', '5º'];

const Steps = ({ activeStep }: StepsProps): JSX.Element => (
  <S.Container>
      {steps.map((label, index) => (
          <S.Step
            key={label}
            active={activeStep === index}
            completed={index < activeStep} 
          >
            {label}
          </S.Step>
      ))}
  </S.Container>
);


export default Steps;