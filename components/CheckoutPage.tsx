import React, { useState } from 'react';
import OrderSummary from './OrderSummary';
import axios from 'axios';

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardDetails, setCardDetails] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/checkout', { name, address, cardDetails });
      setOrderSuccess(true);
      setName('');
      setAddress('');
      setCardDetails('');
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>
      {orderSuccess && <p className="text-green-500">Your order has been placed successfully!</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg mb-2" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-2" htmlFor="address">Shipping Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
            required
          />
        </div>
        <div>
          <label className="block text-lg mb-2" htmlFor="cardDetails">Card Details</label>
          <input
            type="text"
            id="cardDetails"
            value={cardDetails}
            onChange={(e) => setCardDetails(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
            required
          />
        </div>
        <OrderSummary />
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
