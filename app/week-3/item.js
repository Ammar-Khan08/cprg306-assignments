export default function Item({ item }) {
  return (
    <ul>
      <li>{item.name}</li>
      <li>{item.quantity}</li>
      <li>{item.category}</li>
    </ul>
  );
}
