import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-[rgba(109,154,185,0.8)] text-white py-10 dark:bg-gray-800 dark:text-gray-300">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Sección About */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-3">Sobre Nosotros</h3>
                    <p className="text-gray-700 dark:text-gray-400">
                        El arte conecta con tu espiritualidad, lo que sientes y lo que no puedes expresar con palabras.
                    </p>
                </div>
                {/* Sección Enlaces Rápidos */}
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-3">Enlaces Rápidos</h3>
                    <ul className="text-gray-700 dark:text-gray-400 space-y-2">
                        <li><a href="/shop" className="hover:text-white dark:hover:text-gray-200">Tienda</a></li>
                        <li><a href="/about" className="hover:text-white dark:hover:text-gray-200">Sobre Nosotros</a></li>
                        <li><a href="/contact" className="hover:text-white dark:hover:text-gray-200">Contáctenos</a></li>
                        <li><a href="/privacy" className="hover:text-white dark:hover:text-gray-200">Política de Privacidad</a></li>
                    </ul>
                </div>
                {/* Sección Redes Sociales */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 text-2xl">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 text-2xl">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            {/* Parte Inferior del Footer */}
            <div className="text-center mt-10 text-gray-800 dark:text-gray-400">
                &copy; 2024 TuTienda | Todos los derechos reservados
            </div>
        </footer>
    );
};
