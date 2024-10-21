"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "./components/cartItem";
import { PriceFormatter } from "@/components/ui/ScrollButtons/PriceFormatter";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect, useState } from "react";

// interface MercadoPagoResponse {
//     init_point: string;
//     preferenceId: string;
// }

export default function Page() {
    const { items, removeAll } = useCart();
    const prices = items.map((item) => Number(item.price));
    const totalPrice = prices.reduce((total, price) => total + price, 0);

    const [preferenceId, setPreferenceId] = useState<string | null>(null);

    useEffect(() => {
        initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLISHABLE_KEY, { locale: "es-CO" });
    }, []);

    const data = {
            orderid: "123445",
            product: items.map((item) => ({
                productName: item.productName,
                price: Number(item.price),
                quantity: 1,
            }))
        ,
        back_urls: {
            success: typeof window !== 'undefined' ? `${window.location.origin}/success` : '',
            failure: typeof window !== 'undefined' ? `${window.location.origin}/failure` : '',
            pending: typeof window !== 'undefined' ? `${window.location.origin}/pending` : '',
        },
        auto_return: 'approved',
    }

 
    //console.log(data)
    // const headers = {
    //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI5NDQ4NDM4LCJleHAiOjE3MzIwNDA0Mzh9.M6NTC_utz-fN-rLV5NxjX-iz5xOwPFGG9MUAKhr0_y0",
    //         'Content-Type': 'application/json'
    //     }      
    const handleCheckout = async () => {
        try {

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}api/orders`,
                data
            );
            const { init_point, preferenceId } = response.data;
            setPreferenceId(preferenceId);
            // Redirect to MercadoPago checkout page
            window.location.href = init_point;
            removeAll();
        } catch (error) {
            console.error('Error processing Mercado Pago payment:', error);
        }
    };

    return (
        <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 min-h-screen">
            <h1 className="mb-5 text-3xl font-bold">Tu carrito de compras</h1>
            <div className="grid sm:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 ? (
                        <p>No hay productos en el carrito</p>
                    ) : (
                        <ul>
                            {items.map((item) => (
                                <CartItem key={item.id} product={item} />
                            ))}
                        </ul>
                    )}
                </div>
                <div className="max-w-xl">
                    <div className="p-6 rounded-lg bg-slate-100 dark:bg-black/80">
                        <p className="mb-3 text-lg font-semibold">Resumen del pedido</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Total</p>
                            <p>
                                <PriceFormatter value={totalPrice} />
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <Button className="w-full" onClick={handleCheckout}>
                                Comprar
                            </Button>
                            {preferenceId && (
                                <div id="wallet_container">
                                    <Wallet 
                                        initialization={{ preferenceId }} 
                                        customization={{ texts: { valueProp: 'smart_option' } }} 
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
