import React from 'react'
import PageHeading from '../PageHeading/PageHeading'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import classes from './SuccessfullLaunch.module.css'
export default function SucessFullLaunch() {
  const {displayName} = useSelector((state) => state.basicDetails)
  const handleSubmit = () => {
    console.log("launch...")
  }
  return (
    <div>
      <div className={classes.successLogo}>
        <img src='./images/tick.svg' alt="" style={{filter:"invert(1)", transform:"scale(0.4)"}} />
      </div>
      <br/>
      <PageHeading
        heading={`Congralutations, ${displayName}!`}
        subHeading="You have completed onboarding, you can start using the Eden"
      />
      <br />
      <Button className="commonSubmitButton" onClick={handleSubmit}>
        Launch Eden
      </Button>
    </div>
  )
}
