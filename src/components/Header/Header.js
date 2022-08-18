import React from 'react'
import classes from './Header.module.css'
export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src="/images/logo.svg" alt="" className={classes.logoImage} />
        Eden
      </div>
    </div>
  )
}
