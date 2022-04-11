
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import React,{useState} from 'react';


type FilterPropsType='All'|'Dollars'|'Rubls'


function App(){
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'Rubls', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'Rubls', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'Rubls', value: 50, number: ' v1234567890' },
  ])  


  const [filter, setFilter]=useState <FilterPropsType> ('All')

 let currentMoney = money;
 
  if (filter ==='Dollars'){
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots ==='Dollars')  
  }

  if (filter ==='Rubls'){
    currentMoney = money.filter(filteredMoney => filteredMoney.banknots ==='Rubls')  
  }

  const onClickFilterHandler =(nameButton:FilterPropsType)=>{
    
    return(
      setFilter(nameButton)
    )
  }
 
    return (
    <>
  <ul>
    { currentMoney.map((objFromMoneyArr,index)=>{
       return(
         <li key={index}>
           <span>{objFromMoneyArr.banknots}</span>
           <span>{objFromMoneyArr.value}</span>
           <span>{objFromMoneyArr.number}</span>
         </li>
        
       )
     })}
  </ul>

        <div style={{ marginLeft: '35px' }}>
       
       <button onClick={()=>onClickFilterHandler('All')}>All</button>
       <button onClick={()=>onClickFilterHandler('Rubls')}>Rubles</button>
       <button onClick={()=>onClickFilterHandler('Dollars')}>Dolar</button>
        </div>

      </>

    );
}

export default App



