import React, { useState } from "react";
import { StyledForm } from "./styles/Form.styled";
import { v4 as uuid } from 'uuid';


const Form = ({ addItem }) => {
 const unique_id = uuid();

 const [state, setState] = useState({
  englishName: "",
  bodyType: "",
  id: unique_id
 })
 const [validation, setValidation] = useState(false)



 const handleChange = (e) => {
  const value = e.target.value;
  setState({
   ...state,
   [e.target.name]: value
  });
 }

 const handleClick = () => {
  if (state.englishName !== "" && state.bodyType !== "") {
   setState({ englishName: "", bodyType: "", id: unique_id })
   addItem(state)
   setValidation(false)
  } else {
   setValidation(true)
  }
 }


 return (
  <StyledForm>
   <input onChange={handleChange} name="englishName" value={state.englishName} placeholder="Name" />
   <input onChange={handleChange} name="bodyType" value={state.bodyType} placeholder="Body Type" />
   <button onClick={() => handleClick()}>Add Item</button>
   <h3>{validation ? <div>Enter the text fields</div> : null}</h3>
  </StyledForm>
 )
}

export default Form;