"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, firebaseSignOut } = useUserAuth();

  async function loadItems() {
    if (user) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  const handleAddItem = async (itemData) => {
    if (user) {
      const newItem = { ...itemData, quantity: parseInt(itemData.quantity) }; // Ensure data is correctly formatted
      const itemId = await addItem(user.uid, newItem);
      const updatedItem = { ...newItem, id: itemId }; // Include the new Firestore document ID
      setItems((prevItems) => [...prevItems, updatedItem]);
    }
  };

  async function handleDeleteItem(itemId) {
    if (user) {
      try {
        // Attempt to delete the item from Firestore
        await deleteItem(user.uid, itemId);
  
        // If successful, filter the deleted item out of the local state
        setItems(currentItems => currentItems.filter(item => item.id !== itemId));
      } catch (error) {
        console.error("Failed to delete item:", error);
        // Handle any errors (e.g., show an error message to the user)
      }
    }
  }

  const handleItemSelect = (itemName) => {
    let cleanedItemName = itemName.split(",")[0].trim();
    cleanedItemName = cleanedItemName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    setSelectedItemName(cleanedItemName);
  };

  if (user) {
    return (
      <main className="bg-slate-950 text-white m-2 p-2 flex">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Shopping List</h1>

          <button
            onClick={firebaseSignOut}
            className="border-2 border-sky-500 rounded p-1 px-3 hover:bg-sky-500"
          >
            Sign out
          </button>
          <NewItem onAddItem={handleAddItem}></NewItem>
          <ItemList items={items} onItemSelect={handleItemSelect} onDelete={handleDeleteItem}></ItemList>
        </div>

        <div className="flex-1 max-w-sm m-2 mt-16">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    );
  } else {
    return (
      <div>
        <p>You need to be signed in to access the Shopping List.</p>
        <p className="hover:underline">
          <Link href="/week-10">Sign in on this page </Link>
        </p>
      </div>
    );
  }
}

export default Page;