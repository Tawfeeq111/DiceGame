import styled from 'styled-components';
export default function RollDice({diceNum, roll}) { 
  return (
    <Dice>
      <img onClick={roll}  src={`dice_${diceNum}.png`} alt="1" />
      <p>Click on Dice to roll</p>
    </Dice>
  )
}

const Dice = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 10px;
    img{
        width: 250px;
        height: 250px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`
