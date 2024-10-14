import React from 'react';

const ContactPage = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 bg-white/70 m-2  dark:bg-black/80">
            <h1 className="text-4xl font-bold mb-6">Contáctenos</h1>
            <p className="text-lg leading-8 text-gray-700 mb-6">
                Estamos aquí para ayudarle con cualquier pregunta que pueda tener sobre nuestra colección de arte religioso. Ya sea que esté buscando pinturas específicas, esculturas o trabajos personalizados, no dude en ponerse en contacto con nosotros.
            </p>
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Atención al Cliente</h2>
                <p className="text-gray-700 leading-7 mb-4">
                    Para preguntas sobre nuestros productos o asistencia con su pedido, contáctenos en:
                </p>
                <p className="text-lg text-gray-800 font-medium mb-4">
                    Correo electrónico: <a href="mailto:support@religiousart.com" className="text-blue-500 hover:underline">support@religiousart.com</a>
                </p>
                <p className="text-lg text-gray-800 font-medium mb-8">
                    Teléfono: <a href="tel:+123456789" className="text-blue-500 hover:underline">+1 234 567 89</a>
                </p>
                <h2 className="text-2xl font-semibold mb-4">Visite Nuestro Taller</h2>
                <p className="text-gray-700 leading-7 mb-4">
                    Nuestro taller está abierto a visitantes que deseen ver nuestra colección de arte en persona o discutir trabajos religiosos personalizados. Programe una cita o visítenos en:
                </p>
                <p className="text-lg text-gray-800 font-medium mb-4">
                    Dirección: <span className="text-blue-500">123 Religious Art Street, Faith City, CO 12345</span>
                </p>
                <h2 className="text-2xl font-semibold mb-4">Síganos</h2>
                <p className="text-gray-700 leading-7">
                    Manténgase conectado con nosotros en las redes sociales para recibir actualizaciones sobre nuevas llegadas, exposiciones y ofertas especiales:
                </p>
                <ul className="mt-4 space-y-2">
                    <li><a href="https://instagram.com/religiousart" className="text-blue-500 hover:underline">Instagram</a></li>
                    <li><a href="https://facebook.com/religiousart" className="text-blue-500 hover:underline">Facebook</a></li>
                    <li><a href="https://twitter.com/religiousart" className="text-blue-500 hover:underline">Twitter</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;
