import React from 'react'
import './Netflix.css'

export default function Netflix(props) {

 
  return (
    <>  
     <div className='main-div'>
        <div className='card'>
           <img src={props.imgs} alt="" />
           <div> 
              <span className='card-category'>{props.ott}</span>
              <h3 className='card-title'>{props.name}</h3>
              <a href={props.link} target='blank'>
              <button className='btn btn-danger'>Watch Now</button>
              </a>
           </div>
           <p>{props.Ninfo}</p>
        </div>
  
      </div>
    </>
  )
}
