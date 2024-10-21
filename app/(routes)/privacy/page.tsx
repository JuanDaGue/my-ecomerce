import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <p className="mb-4">
        En nuestra plataforma, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos tu información cuando accedes o utilizas nuestros servicios.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Información que Recopilamos</h2>
      <p className="mb-4">
        Podemos recopilar y procesar los siguientes tipos de datos personales:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Información de contacto, como tu nombre y dirección de correo electrónico.</li>
        <li>Datos sobre cómo usas nuestra plataforma, como las páginas que visitas y las acciones que realizas.</li>
        <li>Información técnica, como tu dirección IP y el tipo de navegador que utilizas.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Cómo Utilizamos tu Información</h2>
      <p className="mb-4">
        Utilizamos tus datos personales para los siguientes propósitos:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Proveer, operar y mantener nuestra plataforma y servicios.</li>
        <li>Mejorar la experiencia del usuario y personalizar el contenido que te mostramos.</li>
        <li>Comunicarnos contigo, incluyendo el envío de actualizaciones y notificaciones importantes.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Cómo Compartimos tu Información</h2>
      <p className="mb-4">
        No compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Cuando sea necesario para cumplir con una obligación legal.</li>
        <li>Cuando sea necesario para proteger nuestros derechos o la seguridad de otros usuarios.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Tus Derechos</h2>
      <p className="mb-4">
        Tienes derecho a acceder, corregir o eliminar tus datos personales en cualquier momento. Si deseas ejercer alguno de estos derechos, por favor contáctanos a través de la información proporcionada en nuestra plataforma.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Cambios en la Política de Privacidad</h2>
      <p className="mb-4">
        Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o por razones legales. Te notificaremos cualquier cambio importante mediante una notificación en nuestra plataforma.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p>
        Si tienes alguna pregunta sobre esta Política de Privacidad, no dudes en contactarnos en <a href="luzadrianauchimalargo@gmail.com" className="text-blue-500 underline">luzadrianauchimalargo@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
