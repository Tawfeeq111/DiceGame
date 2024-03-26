import styled from "styled-components";
import { Button } from "../styles/Button";

export default function StartGame({toggle}) {
  return (
    <>
    <Container>
        <div><img src="dices.png"/></div>
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
    </>
  );
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
    width: 1180px;
  
    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`
