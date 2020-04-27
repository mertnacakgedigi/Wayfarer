import React from 'react'

export default function HomepageCard(props) {
    return (
           
            
            <div> 
            <h5> {props.cardInfo.title} </h5>
            <p>{props.cardInfo.info}</p>
            </div>   
            
            
         
    )
}
