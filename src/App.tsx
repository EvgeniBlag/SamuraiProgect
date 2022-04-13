
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import React,{useState} from 'react';
import MyInput from './MyInput';


function App(){

  let [message,setMessage]=useState([
    {message:'message1'},
    {message:'message2'},
    {message:'message3'}
  ])

  const addMessage = (title:string) =>{

let newMessage = {message:title};
    setMessage([newMessage,...message])

  }
  
    return (
   <div className={'App'}>

  <MyInput addMessage={addMessage}/>
  

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



