import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import cx from "classnames";

import classes from './Stepper.module.css'
import { setStep } from '../../actions/stepActions';
function StepperComponent() {
  const dispatch = useDispatch();
  const {currentStep, totalSteps} = useSelector((state) => state.step)
  //convert steps to array
  const steps = Array(totalSteps).fill().map((_, idx) => 1 + idx);

  //goback to different step
  const handleStep = (validStep, step) => {
    if(validStep) {
      dispatch(setStep(step))
    }
  }
  return (
   <div className={classes.stepperClass}>
      <ul className={classes.steps}>
          {
            steps.map((step) => (
              <li
                className={
                  step <= currentStep ? 
                  cx(
                    classes.step,
                    classes.stepActive
                  ) :
                  cx(
                    classes.step,
                    classes.stepsOutline
                  )
                }
                onClick={() => handleStep(step <= currentStep, step)}
                key={step}
              >
                <span> {step}</span>
              </li>
            ))
          }
      </ul>
   </div>
  )
}

export default StepperComponent;