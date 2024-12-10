import React, { useState } from 'react';
import StarRating from './StarRating';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Laisser un avis</h2>
        <div className="mb-4">
          <label className="block mb-2">Note</label>
          <StarRating rating={rating} onRatingChange={setRating} editable={true} />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="comment">Commentaire</label>
          <textarea
            id="comment"
            className="w-full bg-gray-700 text-white rounded p-2"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end space-x-2">
          <button 
            className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 transition-colors"
            onClick={onClose}
          >
            Annuler
          </button>
          <button 
            className="px-4 py-2 bg-primary rounded hover:bg-primary-dark transition-colors"
            onClick={() => onSubmit(rating, comment)}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;

