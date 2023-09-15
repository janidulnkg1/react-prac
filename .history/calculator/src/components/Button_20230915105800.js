import React from 'react'
import classes from "./Button.module.css"

function Button({value}) {
  return (
    <div className={classes.calcBtns}>
        {value}
    </div>
  )
}

export default Button