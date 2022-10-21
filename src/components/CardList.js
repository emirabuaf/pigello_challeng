import Card from "./Card";
import { CardWrapper } from "./styles/Card.styled";

const CardList = ({ list, selectedCategory }) => {

 const filteredItems = !selectedCategory || selectedCategory === 'All' ? list : list.filter((item) => item.bodyType === selectedCategory);

 return (
  <CardWrapper>
   {filteredItems.map((item) => (
    <Card item={item} key={item.id} />
   ))}
  </CardWrapper>
 )
}

export default CardList;

