import React from 'react'
import "../App.css"
import Hoc from  "./Hoc"

function Component1() {
  return (
    <div>
      <h1>Component1</h1>
    </div>
  )
}

export default Hoc(Component1);
