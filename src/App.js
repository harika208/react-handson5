import './App.css';
import PureClass from './PureComponent/PureClass';
import PureFunction from './PureComponent/PureFunction';
import Component1 from "./Hoc/Component1"
import Component2 from './Hoc/Component2';

function App() {
  return (
    <div className="App">
      <h1>Pure Component</h1>
      <PureClass/>
      <PureFunction/>

      <h1>Higher order component</h1>
      <Component1/>
      <Component2/>
   
    </div>
  );
}

export default App;