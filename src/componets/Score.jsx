import styled from "styled-components";
export default function Score({score}) {
  return (
    <ScorePlane>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScorePlane>
  )
};

const ScorePlane = styled.div`
    width: 160px;

    h1{
        font-size: 80px;
        line-height: 80px;
        text-align: center;
    }
    p{
        font-size: 24px;
        text-align: center;
        font-weight: 500;
    }
`

