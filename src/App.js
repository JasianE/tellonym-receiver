import React, {useEffect, useState} from 'react'
import fetchData from './Logic/fetchData';
import Tell from './Tell.js'
import './App.css'

function App() {
  const [tells, setTells] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    (async() => {
      const data = await fetchData()
      setTells(data.reverse())
      setLoaded(true)
    })()
  }, [])
  return (
    <div className="App">
      <h1>Here Are Da Tells</h1>
      <div>
        {loaded ? tells.map((key) => {
          return <Tell message = {key.message} date = {key.date} key = {key._id}/>
        }) : <div>Loading...</div>}
      </div>
    </div>
  );
}

export default App;
