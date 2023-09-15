import React from 'react'
import classes from "./Button.module.css"

function Button({value}) {
  return (
    <div className={value == "C" || value == "=" ? `${classes.calcBtns} ${classes.res}`: `${classes.calcBtns}`}>
        {value}
    </div>
  )
}

export default Button