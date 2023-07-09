import React,{useState} from "react"
import Button from "react-bootstrap/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = () => {
  const [sum, setSum] = useState(0);

  const incNum = (e) =>{
    e.preventDefault()
      setSum(sum + 1); 
  };
  const decNum = (e) =>{
    e.preventDefault()
      if(sum > 0){
          setSum(sum - 1);
      }else{
          alert("sorry, Zero limit reached.")
          setSum(0);
      }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center border border-secondary rounded-0 counter">
        
        <Button onClick={decNum} className="button-two border-0 ms-2">
          <AiOutlineMinus className="text-dark minus-icon"/>
        </Button>
        <h2 className="px-4 font-14 count-padding">{sum}</h2>

        <Button onClick={incNum} className="button-one border-0 me-2">
          <AiOutlinePlus className="text-dark plus-icon"/>
        </Button>
      </div>
    </>
  )
}

export default Counter