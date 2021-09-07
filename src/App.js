import { useEffect, useState } from "react";
import MotivationCard from "./components/MotivationCard";
import Calculator from "./components/Calculator";
function App() {

  // val displays whatever the user enters in the calculator
  const[val,setVal]=useState("");

  // quote stores the motivational quote
  const[quote,setQuote]=useState("");

  // x controls that the quote refreshes on clicking the button
  const[x,setx]=useState(0);

  useEffect(()=>{
    fetch("https://favqs.com/api/qotd").then((res)=>res.json()).then((data)=> {setQuote(data.quote.body)});
  },[x]);
  
  return (
    <div className="cont">
    <div><MotivationCard quote={quote} setx={setx} x={x} /></div>
    <div><Calculator val={val} setVal={setVal} /></div>
    </div>

  );
}
export default App;
