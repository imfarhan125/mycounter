import React,{useState,useEffect} from 'react'


const Counter = ({initial}) => {

    const [stoptimer,setStoptimer]=useState(false);
    const [timervalue,setTimervalue]=useState(initial);

      useEffect(()=>{
    
        const setInt=setInterval(()=>{
          if(!stoptimer && timervalue>0)
        setTimervalue((prev)=>prev-1);
    

    },1000);

  return ()=> {clearInterval(setInt)}
       
  },[stoptimer,timervalue])


    function stopTimerHandler(){
        setStoptimer(true);
    }

    console.log("Counter component runs");


  return (
    <div>
        {timervalue}
        <button onClick={stopTimerHandler}>Stop timer</button>

    </div>
  )
}

export default Counter;
