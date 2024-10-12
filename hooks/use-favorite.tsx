import { ProductType } from "@/types/products";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';
import { toast } from "./use-toast";

interface CartStore {
    items: ProductType[];
    addLoveItem: (data: ProductType) => void;
    removeLoveItem: (id: number) => void;
}

export const useFavorites = create(persist<CartStore>((set, get) => ({
    items: [],
    addLoveItem: (data: ProductType) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);
        if (existingItem) {
        return toast({
            title: "El producto ya existe en el carrito 🥀",
            variant: "destructive"
        });
        }
        set({
        items: [...get().items, data]
        });
        toast({ title: "Producto añadido al carrito 💕" });
    },
    removeLoveItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id != id)] });
        toast({
        title: "Producto Eliminado del carrito 🖤"
        });
    },
    }), {
    name: "FavoriteItems",
    storage: createJSONStorage(() => localStorage)
    }));

    // Tailwind CSS styled card component for favorite products
   