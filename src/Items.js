import Item from './Item'
import './Items.css';
function Items({ items }) {

  return (
    <ul>
      {items.map(({key, name}) => (
        <Item key={key} name={name} index={key}/>
      ))}
    </ul>
  )
}
export default Items;
