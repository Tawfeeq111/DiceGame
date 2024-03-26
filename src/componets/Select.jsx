import styled from 'styled-components';
import { useState } from 'react';
export default function Select({selectedValue, setSelectedValue, sen}) {
    const arr = [1, 2, 3, 4, 5, 6];
    
  return (
    <Container>
    <div className='flex'>
        {arr.map((value, i)=>(
            <Box isSelected={value === selectedValue} key={i} onClick={() => setSelectedValue(value)} >{value}</Box>
            ))} 
    </div>
    <div className='sen'>
        <p className='p1'>{sen}</p>
        <p className='p2'>Select Number</p>
    </div>
    </Container>
  )
}

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1.5px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    margin-left: 15px;
    background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
    color: ${(props) => (props.isSelected ? 'white' : 'black')};
    &:hover{
        cursor: pointer;
    }
`;

const Container = styled.div`
    margin-top: 15px ;
    margin-right: 15px;
    .flex{
        display: flex;
    }
    .sen{
        display: flex;
        justify-content: space-between;
    }
    .p2{
        font-size: 24px;
        font-weight: 500;
    }
    .p1{
        font-size: 16px;
        margin-top: 5px;
        font-weight: 400;
        margin-left: 15px;
        color: #ff0000;
    }
`;