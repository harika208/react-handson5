import React from 'react'
import "../App.css"
import Hoc from "./Hoc"

function Component2() {
  return (
    <div>
      <h1>Component2</h1>
    </div>
  )
}

export default Hoc(Component2);
