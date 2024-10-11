"use client";

import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/categories";
import { SkeletonLoader } from "../SkeletonLoader";


export const ChooseCategory = () => {
  const { result, loading }:ResponseType = useGetCategories();

  // Handle loading state
    if (loading) {
        return <div>Loading categories...</div>;
    }



    return (
        <div className="categories-container mx-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Elige la categoria</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {loading ? (
                <SkeletonLoader count={3} />
            ) : (result?.map((category: CategoryType) => (
            <div key={category.id} className="category-card bg-gray-100  rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Link href={`/categories/${category.slug}`}>
                <div className="block text-center">
                    <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage?.url}`}
                    alt={category.categoryName}
                    className="w-full h-48 object-cover mb-4 duration-300 ease-in-out rounded-lg hover:scale-110"
                    />
                    <h4 className="relative w-full py-2 text-lg font-bold text-center text-white bottom-20 backdrop-blur-lg">{category.categoryName}</h4>
                </div>
                </Link>
            </div>
            )))}
        </div>
        </div>
    );
};
