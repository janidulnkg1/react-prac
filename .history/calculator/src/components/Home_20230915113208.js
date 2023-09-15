import React, {useState} from 'react'
import classes from "./Home.module.css"
import Button from './Button'


function Home() {

const [res, setRes] = useState("")

const buttons = ["C","Del","/","9","8","7","*","6","5","4","+","3","2","1","-",".","0","="]

const handler = (arg) => {


}





  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>
            {res}
            </div>
        </div>
      <div className={classes.btns}>
        {buttons.map((ele,index)=> {return <Button value={ele} key={index}/>})}
      </div>
      </div>
    </div>
  )
}

export default Home