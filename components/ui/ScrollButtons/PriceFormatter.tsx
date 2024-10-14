interface PriceFormatterProps {
    value: number;
}
    
    export function PriceFormatter({ value }: PriceFormatterProps) {
        const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        }).format(value);
    
        return <span>{formattedPrice}</span>;
    }