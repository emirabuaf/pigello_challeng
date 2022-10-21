import React from "react";
import { StyledHeader } from "./styles/Header.styled";

import SelectComponent from "./SelectComponent";

const Header = ({ handleSort, list }) => {
 return (
  <div>
   <StyledHeader>
    <img onClick={handleSort} src="./images/sorting-icon.png" alt="" />
    <SelectComponent list={list} />
   </StyledHeader>
  </div>

 )
}

export default Header;