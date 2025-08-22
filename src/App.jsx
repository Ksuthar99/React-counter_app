import { useState } from "react";

function App(){
  const[count,setCount]=useState(0);
  let message="";
  if(count>0){
    message = "Value is Positive";
  }
  else if(count <0){
    message ="value is Negative";
  }
  else{
    message ="value is Zero";
  }
  
  return(
    <div>
      <div style={{
        textAlign:"center",
        marginTop:"50px"
      }}>
        <h1>Counter:{count}</h1>
        <p>{message}</p>
        <button onClick={() => setCount(count+1)}>+1</button>
        <button onClick={() => setCount(count-1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

    </div>
  )
}

export default App;