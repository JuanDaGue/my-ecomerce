import {cn} from '@/lib/utils'
import { Interface } from 'readline';


interface IconButtonProps {
    onClick: ()=> void,
    icon: React.ReactElement,
    className?: string,

}

export const IconButton = (props: IconButtonProps) => {
    const {onClick, icon, className} = props;
    return (
        <button 
            onClick={onClick} 
            className={cn("rounded-full flex items-center bg-white shadow-md p-2 hover:scale-110 transition", className)}>
                {icon}
        </button>
    );
}