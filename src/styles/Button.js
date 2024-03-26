import styled from "styled-components"
export const Button = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 5px;
    width: 220px;
    border: 2px solid transparent;
    font-size: 17px;
    margin-left: 310px;

    &:hover{
        background-color: white;
        color: black;
        border: 2px solid black;
        cursor: pointer;
        transition: 0.2s background-color ease-in;
    }
`

export const OuterButton = styled(Button)`
    margin-left: 0px;
    background-color: white;
    color: black;
    border: 2px solid black;
    &:hover{
        background-color: black;
        color: white;
        border: 2px solid transparent;
        cursor: pointer;
        transition: 0.2s background-color ease-in;
    }
`