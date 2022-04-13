
import React, { ChangeEvent, useState } from "react";

type addMessagePropsType={
    addMessage:(title:string)=>void
    }



const MyInput =(props:addMessagePropsType)=>{
 
    const[title,setTitle]=useState('')

    const HandleClick = (event:ChangeEvent<HTMLInputElement>) => {
        return(
            setTitle(event.currentTarget.value)
        )
    }

    const onClickButtonHundler =()=>{
        return(
            props.addMessage(title),
            setTitle('')
        )
    }

    return(
        <div>

        <input onChange={HandleClick} type="text" value={title} />
        <button onClick={onClickButtonHundler} >+</button>
        
   
      </div>
    )
}


export default MyInput