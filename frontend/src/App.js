import React, {useState, useEffect} from 'react';
import Concerts from './Concerts.js'

const App = () => {
  const [concerts, setConcerts] = useState({})
  fetch("http://localhost:3001")
  .then(res => res.json())
  .then(json =>{
    setConcerts(json)
  })
  return (
    <div>
      <Concerts></Concerts>
    </div>
  );
}

export default App;
