import styled from 'styled-components';


export const ButtonContainer = styled.button<{ disabled: boolean}>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
        &:disabled {
    pointer-events: none; 
    opacity: 0.5; 
    background-color:rgb(77, 6, 97);
    color: #fff; 
    border: 1px solidrgb(0, 0, 0);
  }
`