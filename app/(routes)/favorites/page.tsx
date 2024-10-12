// export default function(){
//     return(
//         <div className="max-w-4xl py-4 mx-auto sm:py sm:px-24">
//             <h1 className="sm:text-2xl"> Mis pinturas favoritas</h1>

//             </div>
//     )
// }
"use client"
import { useFavorites } from "@/hooks/use-favorite";

const useLoveProducts = ({ product }: { product: ProductType }) => {
    const { addLoveItem, removeLoveItem, items } = useFavorites();

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden m-4 transition-transform transform hover:scale-105">
 
        <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{items.name}</h3>
            <p className="mt-2 text-gray-600">{items.description}</p>
            <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-gray-900">${items.price}</span>
            <button
                onClick={() => addLoveItem(product)}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-500 active:bg-blue-700 transition-colors"
            >
                Add to Cart
            </button>
            </div>
            <button
            onClick={() => removeLoveItem(items.id)}
            className="mt-2 w-full text-sm text-red-500 hover:text-red-600 transition-colors"
            >
            Remove from Favorites
            </button>
        </div>
        </div>
    );
};

export default useLoveProducts;
