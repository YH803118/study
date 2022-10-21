// import { useState } from "react";
import Timer from "./Timer";

import axios from "axios";
import { useEffect } from "react";

// const nameArr = [
//   {
//     name: 'John',
//     age: 18,
//   },
//   {
//     name: 'Nahida',
//     age: 15,
//   },
//   {
//     name: 'Yura',
//     age: 23,
//   },
// ]

function App() {

 

  const callApi = async()=>{
    axios.get("/api").then((res)=>{console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);

  // const [state, setState] = useState(1);
  // const [arr, setArr] = useState(nameArr);
  
  // const onIncrease = () => {
  //   setState(state+1);
  //   setArr([...arr,{name:'Mr',age:state+20,}]);
  //   console.log(` click! state:${state}`);
  //   console.log(arr[state]);
  // }

  // getData().then(resoleveData => console.log(resoleveData));

  return (
    <div>
      <Timer></Timer>
      {/* <button onClick={onIncrease}>+1</button>
      <p>{state}</p> */}
    </div>
  );
}

export default App;