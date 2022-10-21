import { StyledSelect } from "./styles/Select.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
 selectCategory
} from "../store/storeExample";

const SelectComponent = ({ list }) => {
 const dispatch = useDispatch();
 const [value, setValue] = useState("")

 const options = list.map((item) => item.bodyType);
 const filteredOptions = options.filter((bodyType, index) => options.indexOf(bodyType) === index)

 const handleCategoryChange = (e) => {
  setValue(e.target.value)
  dispatch(selectCategory(e.target.value))
 }

 return (
  <StyledSelect value={value} onChange={handleCategoryChange}>
   <option value="All">All</option>
   {filteredOptions.map((option, index) => (
    <option key={index} value={option}>{option}</option>
   ))}
  </StyledSelect>
 )
}

export default SelectComponent;