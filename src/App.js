import React from 'react'
import './App.css';
import Netflix from './Components/Netflix';
import Ndata from './Components/NData';



function ncard(value,index) {
  return(
    <div >
   <Netflix 
    key={value.id}
    ott={value.ott} 
    name={value.name} 
    imgs={value.img} 
    link={value.link}
    Ninfo={value.Ninfo} 
    /> 
    </div>
 
  )
}



function App() {
    return(
      <>

      <h1> A <span> Netflix </span> Orignal Series </h1>
      <div className='main-div'>
      {Ndata.map((ncard))}
      </div>
      
      </>
    )
  }


export default App;
