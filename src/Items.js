import Item from './Item'
import './Items.css';
function Items({ items, setItems }) {

  return (
    <ul>
      {items.map(({key, name}) => (
        <Item key={key} name={name} index={key} setItems={setItems}/>
      ))}
    </ul>
  )
}
export default Items;
