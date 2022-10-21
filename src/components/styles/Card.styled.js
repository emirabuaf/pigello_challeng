import styled from "styled-components";

export const StyledCard = styled.div`
 background-color: ${({ theme }) => theme.colors.red};
 border-radius: 15px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
 margin: 20px 10px;
 padding: 15px;
 width: 250px;
 
 div{
  display: flex;
  align-items: center;
 }

 @media(max-width:${({ theme }) => theme.mobile}){
  width: auto;
 }
`

export const CardWrapper = styled.div`
 max-width: 1000px;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin: 0 auto;

 @media(max-width:${({ theme }) => theme.mobile}){
  display: block;
 }
`