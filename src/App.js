import { useState } from "react";
import Timer from "./Timer";
const nameArr = [
  {
    name: 'John',
    age: 18,
  },
  {
    name: 'Nahida',
    age: 15,
  },
  {
    name: 'Yura',
    age: 23,
  },
]

function App() {

  const [state, setState] = useState(1);
  const [arr, setArr] = useState(nameArr);
  console.log(`state:${state}`);
  
  const onIncrease = () => {
    setState(state+1);
    setArr([...arr,{name:'Mr',age:state+20,}]);
    console.log(` click! state:${state}`);
    console.log(arr[state]);
  }
  return (
    <div>
      <Timer></Timer>
      <button onClick={onIncrease}>+1</button>
      <p>{state}</p>
    </div>
  );
}

export default App;