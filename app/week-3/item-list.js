import Item from "./item";

export default function ItemList({ items }) {
  return (
    <div>
      {items.map(({ name, quantity, category }, index) => (
        <Item key={index} item={{ name, quantity, category }} />
      ))}
    </div>
  );
}
