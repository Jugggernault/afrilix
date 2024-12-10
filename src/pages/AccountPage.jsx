import { useState } from 'react';
import { User, CreditCard, Settings } from 'lucide-react';
import SubscriptionModal from '../components/SubscriptionModal';

const AccountPage = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Mon compte</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center"><User className="mr-2" /> Profil</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Nom</label>
            <input type="text" id="name" className="mt-1 block w-full bg-white/10 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input type="email" id="email" className="mt-1 block w-full bg-white/10 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white" />
          </div>
          <button className="bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-dark transition-colors">Sauvegarder</button>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center"><CreditCard className="mr-2" /> Abonnement</h2>
        <div className="bg-white/10 p-4 rounded-md">
          <p className="font-medium">Plan actuel : Premium</p>
          <p className="text-sm text-gray-400 mt-1">Prochain paiement : 15/06/2023</p>
          <button 
            className="mt-4 bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-dark transition-colors"
            onClick={() => setIsSubscriptionModalOpen(true)}
          >
            Gérer l&apos;abonnement
          </button>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center"><Settings className="mr-2" /> Paramètres</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Notifications par email</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span>Mode sombre</span>
            <label className="switch">
              <input type="checkbox" checked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </section>

      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen} 
        onClose={() => setIsSubscriptionModalOpen(false)} 
      />
    </div>
  );
};

export default AccountPage;

