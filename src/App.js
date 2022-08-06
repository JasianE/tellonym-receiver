import React, {useEffect, useState} from 'react'
import fetchData from './Logic/fetchData';
import Tell from './Tell.js'

function App() {
  const [tells, setTells] = useState([])

  useEffect(() => {
    (async() => {
      const data = await fetchData()
      setTells(data.reverse())
    })()
  }, [])
  return (
    <div className="App">
      <h1>Here Are Da Tells</h1>
      <div>
        {tells.map((key) => {
          return <Tell message = {key.message} date = {key.date} key = {key._id}/>
        })}
      </div>
    </div>
  );
}

export default App;
