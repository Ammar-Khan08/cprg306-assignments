export default function Item({ name, quantity, category }) {
    return (
      <>
        <ul className="bg-slate-700 mb-4 mt-4 ml-2 p-2 max-w-96">
          <li className="text-xl font-bold">{name}</li>
          <li className="text-sm">
            Buy {quantity} in {category}
          </li>
        </ul>
      </>
    );
  }