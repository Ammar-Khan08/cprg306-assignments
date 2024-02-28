import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-800 text-white mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList/>
    </main>
  );
}