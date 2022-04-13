

import React from "react";

type ButtonPropsType={
    name:string,
    callBack:()=>void
}

export const Button = (props:ButtonPropsType) =>{

   const HandleClick =()=>{
     
           props.callBack()
       
   }

    return(
     <button onClick={HandleClick}>{props.name}</button>
    )
}

