import React from 'react';

export default function ContactPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-4">Si vous avez des questions ou des retours a me faire, vous pouvez me contacter via le formulaire ci-dessous.</p>
      
      {/* Formulaire de contact */}
      <form className="mt-6">
        <div>
          <label htmlFor="name" className="block">Nom</label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Votre nom"
          />
        </div>
        
        <div className="mt-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Votre email"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            rows={4}
            placeholder="Votre message"
          ></textarea>
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
          Envoyer
        </button>
      </form>
    </div>
  );
}
