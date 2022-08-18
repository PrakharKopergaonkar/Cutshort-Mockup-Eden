import React from 'react'
import PageHeading from '../PageHeading/PageHeading'
import { Button } from 'react-bootstrap';
import classes from './SuccessfullLaunch.module.css'
export default function SucessFullLaunch() {
  const handleSubmit = () => {
    console.log("launch...")
  }
  return (
    <div>
      <div className={classes.successLogo}>
        <img src='./images/tick.svg' alt="" style={{filter:"invert(1)"}} />
      </div>
      <PageHeading
        heading="Congralutations, Eren!"
        subHeading="You have completed onboarding, you can start using the Eden"
      />
      <br />
      <Button className="commonSubmitButton" onClick={handleSubmit}>
        Launch Eden
      </Button>
    </div>
  )
}
