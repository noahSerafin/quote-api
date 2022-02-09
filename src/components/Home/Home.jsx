import "./Home.scss";
import Quote from "../Quote/Quote";
import React, {useState, useEffect} from "react";
import { getScore, setScore } from "../../utils/localStorageHelper";

const Home = (props) => {  
  const checkAnswer = (president) => {
    if(president === props.quote.president){
      alert("Correct!")     
    } else {
      alert("incorrect, this was said by " + props.quote.president);
    }
    refreshPage();
  } 
  
  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div>
      <h1>The Last Four Presidents</h1>
      <h2>Take a guess at who said this:</h2>
      <Quote key={props.quote.id} quote={props.quote} isHidden={true}/>
      <div className="buttons">
        <button onClick={() => checkAnswer("Bush")}>Bush</button>
        <button onClick={() => checkAnswer("Obama")}>Obama</button>
        <button onClick={() => checkAnswer("Trump")}>Trump</button>
        <button onClick={() => checkAnswer("Biden")}>Biden</button>
      </div>            
    </div>  
  )
}

export default Home
