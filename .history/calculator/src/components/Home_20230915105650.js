import React from 'react'
import classes from "./Home.module.css"
import Button from './Button'


function Home() {

const buttons = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","=","C","Del"]






  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>
            </div>
        </div>
      </div>
      <div className={classes.btns}>
        {buttons.map((ele,index)=> {return <Button value={ele} key={index}/>})}
      </div>
   
    </div>
  )
}

export default Home