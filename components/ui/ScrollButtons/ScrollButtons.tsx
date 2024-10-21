import { ChevronLeft, ChevronRight } from "lucide-react";
import { RefObject } from "react";

interface ScrollButtonsProps {
    scrollRef: RefObject<HTMLDivElement>;
}

export const ScrollButtons: React.FC<ScrollButtonsProps> = ({ scrollRef }) => {
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="absolute inset-y-0 flex justify-between items-center w-full">
            {/* Left Button */}
            <button
                onClick={scrollLeft}
                className="bg-gray-500 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
            >
                <ChevronLeft size={24} />
            </button>
            {/* Right Button */}
            <button
                onClick={scrollRight}
                className="bg-gray-500 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-700"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};
