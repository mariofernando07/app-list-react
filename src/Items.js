import Item from './Item'
import './Items.css';
function Items({ items, setItems }) {

  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} name={item} index={index} setItems={setItems}/>
      ))}
    </ul>
  )
}
export default Items;
