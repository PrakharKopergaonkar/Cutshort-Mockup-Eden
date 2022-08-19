import React from 'react'
import BasicDetails from '../../components/BasicDetails/BasicDetails';
import Header from '../../components/Header/Header';
import Stepper from '../../components/Stepper/Stepper';
import SucessFullLaunch from '../../components/SuccessfullLaunch/SucessFullLaunch';
import WorkspaceDetails from '../../components/WorkspaceDetails/WorkspaceDetails';
import WorkspaceType from '../../components/WorkspaceType/WorkspaceType';
import classes from './Home.module.css'
import { useSelector } from 'react-redux/es/exports';
const Home = () => {
  const { currentStep } = useSelector((state) => state.step);
  const PageComponent = () => {
    switch (currentStep) {
      case 1:
        return <BasicDetails />
      case 2:
        return <WorkspaceDetails />
      case 3:
        return <WorkspaceType />
      case 4:
        return <SucessFullLaunch />
      default:
        return <></>
    }
  }

  return (
    <div className={classes.Home}>
      <Header />
      <Stepper />
      <br />
      <div style={{width:"30rem"}}>
        {PageComponent()}
      </div>
    </div>
  )
}

export default Home;
