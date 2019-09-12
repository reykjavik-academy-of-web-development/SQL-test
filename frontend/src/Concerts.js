import React, {useState, useEffect} from 'react';
import Comment from "./Comment";

const Concerts = ({concerts}) => {
  
  return (
    <div>
        {console.log(concerts)}
        {concerts.map(concert =>(            
            <div>
                <div>{concert.eventDateName}</div>
                <div>{concert.name}</div>
                <div>{concert.dateOfShow}</div>
                <img src = {concert.image}/>
                <Comment id={concert.ID}></Comment>
            </div>
        )         
    )}
       
    </div>
  );
}

export default Concerts;
