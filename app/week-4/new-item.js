"use client"
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);

        alert(`Item:${name} Quantity: ${quantity} Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return(
        <main className="flex justify-center">
            <div className="bg-slate-800 flex items-center justify-center w-full max-w-md text-black p-8 rounded-lg shadow-md mt-8">
                <div className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <label className="block text-white">
                            Name:
                            <input type="text" value={name} onChange={(event) => setName(event.target.value)} required className="text-black w-full p-2 border border-gray-300 rounded"/>
                        </label>
                        <label className="block text-white">
                            Quantity:
                            <input type="number" min={1} max={99} required value={quantity} onChange={(event) => setQuantity(event.target.value)} className="w-full p-2 border border-gray-300 rounded text-black"/>
                        </label>
                        <label className="block text-white">
                            Category:
                            <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full p-2 border border-gray-300 rounded text-black">
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="frozen foods">Frozen foods</option>
                                <option value="canned goods">Canned goods</option>
                                <option value="dry foods">Dry foods</option>
                                <option value="beverages">Beverages</option>
                                <option value="snacks">Snacks</option>
                                <option value="household">Household</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        <button type="submit" className="w-full p-2 bg-slate-900 text-white rounded">Add Item</button>
                    </form>
                </div>
            </div>
        </main>
    )
    
}