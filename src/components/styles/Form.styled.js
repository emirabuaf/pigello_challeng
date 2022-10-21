import styled from "styled-components";

export const StyledForm = styled.div`
 max-width: 750px;
 width: 100%;
 display: flex;
 margin: 0 auto;
 align-items: center;
 
 input{
  margin-right: 10px;
  border-radius: 15px;
  padding: 10px
 }

 button{
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.headerSmall};
  color: ${({ theme }) => theme.colors.white};
 }

 h3 {
  color: ${({ theme }) => theme.colors.red};
  margin-left: 8px;
 }

 @media(max-width:${({ theme }) => theme.mobile}){
  flex-direction: column;
  input{
   margin-right: 0px;
   margin-bottom: 10px;
   width: 100%;
  }
  button{
   width: 100%;
  }
 }


`