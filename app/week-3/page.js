import ItemList from "./item-list";

export default function Page() {
  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },

    {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },

    {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },

    {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },

    {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },

    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },

    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },

    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },

    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },

    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },

    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },

    {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    },
  ];

  return (
    <main className="bg-violet-900 mx-auto p-2 ">
      <h1 className="text-white text-3xl font-bold">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
