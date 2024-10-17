"use client";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const FiltersCategory = () => {
    const router = useRouter();

    const handleCategoryChange = (value:string) => {
        router.push(`/categories/${value}`);
    };

    return (
        <div className="sm:w-[310px] sm:mt-5 p-6">
            <p className="text-lg font-bold">Categorias</p>
            <RadioGroup defaultValue="category-1" onValueChange={handleCategoryChange}>
                <div className="flex items-center space-x-2 py-2">
                    <RadioGroupItem value="pinturas" id="category-1" />
                    <Label htmlFor="category-1">Pinturas</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="esculturas" id="category-2" />
                    <Label htmlFor="category-2">Esculturas</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="artesanias" id="category-3" />
                    <Label htmlFor="category-3">Artesanias</Label>
                </div>
            </RadioGroup>
        </div>
    );
};
