import React from 'react'
import classes from './PageHeading.module.css'
function PageHeading({heading, subHeading}) {
    return (
        <div style={{textAlign:"center"}}>
            <h2 className={classes.heading}> {heading} </h2>
            <span className={classes.subHeading}> {subHeading} </span>
        </div>
    )
}

export default PageHeading
