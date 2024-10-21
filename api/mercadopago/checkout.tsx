// Import Mercado Pago SDK
import { MercadoPagoConfig, Preference } from 'mercadopago';
import type { NextApiRequest, NextApiResponse } from 'next';

// Create and configure MercadoPago instance
const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN || '', // Add access token from environment variable
});

// API handler for creating a payment preference
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
        // Create a new Preference object with the client
        const preference = new Preference(mercadopago);

        // Set the preference body using the request body data
        const preferenceData = {
            items: req.body.items, // Items in the cart
            payer: req.body.payer, // Payer's email
            back_urls: req.body.back_urls, // Success, failure, and pending URLs
            auto_return: req.body.auto_return || 'approved', // Auto-return upon successful payment
        };

        // Create a preference with the given data
        const response = await preference.create({ body: preferenceData });

        // Send back the payment URL
        res.status(200).json(response.body);
        } catch (error) {
        // Send error response
        res.status(500).json({ error: error.message });
        }
    } else {
        // Handle other methods not allowed
        res.status(405).json({ error: 'Method not allowed' });
    }
}
