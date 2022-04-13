
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import React,{useState} from 'react';
import { Input } from './Input';
import { Button } from './Button';


function App(){

  let [message,setMessage]=useState([
    {message:'message1'},
    {message:'message2'},
    {message:'message3'}
  ])


  const[title,setTitle]=useState('')

  const addMessage = (title:string) =>{

    let newMessage = {message:title};
       setMessage([newMessage,...message])
  }
  
    const Handler =()=>{
    return(
      addMessage(title),
      setTitle('')
    )
    }


  
  
    return (
   <div className={'App'}>

  {/* <MyInput addMessage={addMessage}/> */}

   <Input title={title} setTitle={setTitle}/>
   <Button name={'Add'} callBack={Handler}/>

        {message.map((el, index) => {
          return (
            <div key={index}>
              {el.message}
            </div>
          )
        })}

   </div>


    );
}

export default App



