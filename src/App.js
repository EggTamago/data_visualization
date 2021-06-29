import React, { useState } from 'react'
import ReactFileReader from 'react-file-reader';

import './css/App.css'

const App = () => {

  const [count, setCount] = useState(0)

  const handleFiles = (files) => {
    console.log(files)
  //   var reader = new FileReader();
  //   reader.onload = function(e) {
  //   // Use reader.result
  //   alert(reader.result)
  //   }
  // reader.readAsText(files[0]);
}

  return (
    <div className="App">
      <div>
        <p>you push {count} times</p>
        <button onClick={()=>setCount(count + 1)}>increment</button>
      </div>

      <div>
        <h1>csvファイル</h1>
      </div>

      <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
        <button className='btn'>Upload</button>
      </ReactFileReader>

    </div>
  )
}
export default App;
