import React from 'react';

const OrderSummary = () => {
  const cartItems = [
    { name: 'Gold Ring', quantity: 1, price: 299.99 },
    { name: 'Silver Necklace', quantity: 2, price: 199.99 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul className="mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{item.name} (x{item.quantity})</span>

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul className="mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{item.name} (x{item.quantity})</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between text-lg font-bold">
        <span>Total:</span>
      </div>
    </div>
  );
};

export default OrderSummary;
