import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', { name, email, message });
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('There was an error sending your message:', error);
    }
  };

  return (
    <div className="p-10 bg-secondary text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
      {success && <p className="text-green-500">Your message has been sent!</p>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-lg mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md border-none"
            required
          />
        </div>
