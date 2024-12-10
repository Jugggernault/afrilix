import React, { useState } from 'react';
import { X } from 'lucide-react';

const plans = {
  free: {
    name: 'Gratuit',
    features: [
      'Accès limité au catalogue',
      'Publicités incluses',
      'Qualité vidéo standard',
      'Visionnage sur un seul appareil'
    ]
  },
  premium: {
    name: 'Premium',
    features: [
      'Accès illimité au catalogue',
      'Sans publicités',
      'Qualité vidéo HD et 4K',
      'Visionnage sur plusieurs appareils',
      'Téléchargements pour visionnage hors-ligne',
      'Accès en avant-première aux nouvelles sorties'
    ]
  }
};

const SubscriptionModal = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  if (!isOpen) return null;

  const handlePayment = () => {
    // Logique de paiement à implémenter
    console.log(`Paiement initié pour le plan ${plans[selectedPlan].name}`);
    // Ici, vous pouvez ajouter la logique pour rediriger vers une page de paiement
    // ou déclencher un processus de paiement
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start p-4 z-50 overflow-y-auto">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md relative my-8">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Gérer l'abonnement</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Avantages du plan {plans[selectedPlan].name}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {plans[selectedPlan].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-4 items-center">
          <button
            className={`flex-1 py-2 px-4 w-full rounded-lg ${
              selectedPlan === 'free' ? 'bg-primary text-white' : 'bg-gray-600 text-gray-200'
            }`}
            onClick={() => setSelectedPlan('free')}
          >
            Plan Gratuit
          </button>
          <button
            className={`flex-1 py-2 px-4 w-full rounded-lg ${
              selectedPlan === 'premium' ? 'bg-primary text-white' : 'bg-gray-600 text-gray-200'
            }`}
            onClick={() => setSelectedPlan('premium')}
          >
            Plan Premium
          </button>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-primary text-white rounded-lg py-2 px-4 hover:bg-primary-dark transition-colors"
            onClick={handlePayment}
          >
            {selectedPlan === 'free' ? 'Choisir ce plan' : 'Payer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;

