import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const Stripe = () => {
  useEffect(() => {
    const stripePromise = loadStripe('pk_test_51NLncNCV4GRE9vPYUQSxxjMIeRk1riEMQCb34lvQOByEuF1UFPYSeC0VCHl4UPoGN7Y6xJmij0puoD8fwMX0AeGF00Bs5vjhBp');

    const initializeStripe = async () => {
      const stripe = await stripePromise;

      // Créez un élément de paiement
      const elements = stripe.elements();
      const card = elements.create('card');
      card.mount('#card-element');

      // Gérez l'événement de validation de la carte
      card.on('change', (event) => {
        // Votre logique de gestion des changements de carte
        console.log("ok");
        
      });
    };

    initializeStripe();
  }, []);

  return (
    <div>
      <div id="card-element"></div>
      {/* Le reste de votre composant */}
    </div>
  );
};

export default Stripe;
