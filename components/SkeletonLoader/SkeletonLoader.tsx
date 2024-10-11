// components/SkeletonLoader.tsx

interface SkeletonLoaderProps {
    count?: number;  // Allows you to specify the number of skeleton cards
}
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ count = 6 }) => {
        return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Create as many skeleton cards as specified by the `count` prop */}
            {[...Array(count)].map((_, index) => (
            <div key={index} className="skeleton-card w-64">
                <div className="skeleton h-48 w-full mb-4"></div>
                <div className="skeleton h-6 w-3/4 mb-2"></div>
                <div className="skeleton h-4 w-1/2 mb-2"></div>
                <div className="skeleton h-4 w-1/4"></div>
            </div>
            ))}
        </div>
        );
    };
    
