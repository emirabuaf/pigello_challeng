import { StyledCard } from "./styles/Card.styled";

const Card = ({ item }) => {
 return (
  <StyledCard>
   <h3>{item.englishName}</h3>
   <div>
    <h4>Closest planet:</h4>
    <p>{item.aroundPlanet && item.aroundPlanet.planet !== null ? item.aroundPlanet.planet : "N/A"}</p>
   </div>
   <div>
    <h4>Body type:</h4>
    <p>{item.bodyType}</p>
   </div>

  </StyledCard>
 )
}

export default Card;