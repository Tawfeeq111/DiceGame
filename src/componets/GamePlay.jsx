import RollDice from "./RollDice";
import Score from "./Score"
import Select from "./Select"
import styled from 'styled-components'
import { useState } from "react";
import { OuterButton } from "../styles/Button";
import Rules from "./Rules";

export default function GamePlay() {
  const [selectedValue, setSelectedValue] = useState(undefined);
  const [diceNum, setDiceNum] = useState(1);
  const [score, setScore] = useState(0);
  const [sen, setSen] = useState("");
  const [showRule, setShowRules] = useState(false);

  const generateNum = (minVal, maxVal) => {
    var randVal = minVal + (Math.random() * (maxVal - minVal));
    return Math.round(randVal);
  }

  const roll = () => {
    if (selectedValue === undefined) {
      setSen(" Please selecet a number first")
    }
    else {
      setSen("");
      let temp = generateNum(1, 6);
      setDiceNum(temp);
      if (selectedValue === temp) {
        setScore((prev) => prev + temp);
      }
      else {
        setScore((prev) => prev - 2);
      }
      setSelectedValue(undefined);
    }
  }

  const ruleToggle = (rule) => {
    setShowRules(!rule);
  }

  return (
    <>
      <MainContainer>
        <Score score={score} />
        <Select sen={sen} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      </MainContainer>
      <RollDice diceNum={diceNum} roll={roll} />
      <Btns>
        <OuterButton onClick={()=>setScore(0)}>Reset Score</OuterButton>
        <OuterButton onClick={()=>ruleToggle(showRule)}>{showRule ? 'Hide Rule' : 'Show Rules'}</OuterButton>
      </Btns>
      {showRule && <Rules/>}
      
    </>
  );
}

const MainContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  margin-bottom: 15px;
  
`

