import React, { useEffect, useState } from 'react'
import CSVReader from 'react-csv-reader'
import Button from '@material-ui/core/Button';
import DataTable from 'react-data-table-component';

import './css/App.css'

const App = () => {

  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return function () { clearInterval(intervalId) }
  }, [time])

  const handleForce = (data, fileInfo) => console.log(data, fileInfo)
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  }

  return (
    <div className="App">

      <div className="countArea">
        <p>you push {count} times</p>
        <Button onClick={() => setCount(count + 1)} variant="contained" color="primary">increment</Button>
      </div>

      <div className="timeArea">
        {time.toString()}
      </div>


      <div>
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV"
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions} />
      </div>

      <DataTable />

    </div>
  )
}
export default App;
