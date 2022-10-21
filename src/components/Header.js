import React from "react";
import { StyledHeader } from "./styles/Header.styled";

import SelectComponent from "./SelectComponent";
import Form from "./Form"

const Header = ({ handleSort, list, addItem, sortOrder }) => {

 const showAscDesc = () => {
  if (sortOrder === "asc") {
   return <h1> ↓</h1>;
  } else if (sortOrder === "desc") {
   return <h1>↑</h1>;
  } else return null;
 }
 return (
  <div>
   <StyledHeader>
    <img onClick={handleSort} src="./images/sorting-icon.png" alt="" />
    {showAscDesc()}
    <SelectComponent list={list} />
   </StyledHeader>
   <Form addItem={addItem} />
  </div>

 )
}

export default Header;