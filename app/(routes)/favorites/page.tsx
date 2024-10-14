"use client"

import { useFavorites } from "@/hooks/use-favorite";
import { FavItem } from "./components/favorites/favorites";


export default function Page() {
    const {items}= useFavorites()
    return(
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 min-h-screen">
            <h1 className="mb-5 text-3xl font-bold"> Shooping Cart</h1>
            <div className="grid sm:grid-cols-1 sm:gap-5">
                <div>{items.length==0 && (
                    <p> No hay productos en el carrito</p>
                )}
                <ul>
                    {items.map((item)=>(
                        <FavItem key={item.id} product={item}/>
                    ))}
                </ul>
                </div>
                
            </div>

        </div>
    )
}