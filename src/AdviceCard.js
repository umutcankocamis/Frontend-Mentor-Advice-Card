import React, { useEffect, useState } from "react";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";

//https://api.adviceslip.com/advice

export default function AdviceCard() {
  const [advice, setAdvice] = useState([]);
  const URL = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    const response = await axios.get(URL);
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card">
      <p>ADVICE #{advice.id}</p>
      <h2>"{advice.advice}"</h2>
      <img src={dividerDesktop} className="divider-desktop" alt="divider" />
      <img src={dividerMobile} className="divider-mobile" alt="divider" />
      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
}
