export default function Item({ item }) {
  return (
    <ul className=" bg-slate-900 text-white m-2 border rounded max-w-96 p-2">
      <li>{item.name}</li>
      <li>
        Buy {item.quantity} in {item.category}
      </li>
    </ul>
  );
}
