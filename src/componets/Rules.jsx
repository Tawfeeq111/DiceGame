import React from 'react'
import styled from 'styled-components'

export default function Rules() {
  return (
    <div>
      <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any number and Click on dice image</p>
           
            <p>After clicking on dice if selected number is equal to dice number you will get same ponits as dice</p>
            <p>If you get wrong guess then 2 points will be dedcuted</p>
        </div>
      </RulesContainer>
    </div>
  )
}

const RulesContainer = styled.div`

    background-color: #fbf1f1;
    border-radius: 20px;
    padding: 10px;
    width: 800px;
    margin: auto;
    h1{
        font-size: 24px;
    }
    p{
        padding: 0px;
    }

`
