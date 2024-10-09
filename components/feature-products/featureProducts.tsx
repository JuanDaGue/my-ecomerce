"use client"

import { useGetFeatureProducts } from "@/api/useGetFeatureProducts";

export const FeatureProducts =()=>{
    const { loading,result} = useGetFeatureProducts()
    console.log('resutl', result)
    return(
        <div className="max-m-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

        </div>
    );
}