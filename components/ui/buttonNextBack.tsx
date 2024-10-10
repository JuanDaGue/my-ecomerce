import { ChevronLeft, ChevronRight } from "lucide-react";

interface ButtonNextBackProps {
    onScrollLeft: () => void;
    onScrollRight: () => void;
}

export const ButtonNextBack = ({ onScrollLeft, onScrollRight }: ButtonNextBackProps) => {
    return (
        <div>
            {/* Scroll Left Button */}
            <button
                onClick={onScrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scroll Right Button */}
            <button
                onClick={onScrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full z-10"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};
