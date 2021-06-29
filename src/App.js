import React, { useEffect, useState } from 'react'
import CSVReader from 'react-csv-reader'

import './css/App.css'

const App = () => {

  const [count, setCount] = useState(0)
  const [time, setTime] = useState('')

  const GetDate = () => {
    const now = new Date()
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    return <p>{time}</p>
  }

  const handleForce = (data, fileInfo) => console.log(data, fileInfo)
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  }

  return (
    <div className="App">
      <div>
        <p>you push {count} times</p>
        <button onClick={()=>setCount(count + 1)}>increment</button>
      </div>

      <div>
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV with secret Death Star statistics"
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions} />
      </div>

      <GetDate />

    </div>
  )
}
export default App;
