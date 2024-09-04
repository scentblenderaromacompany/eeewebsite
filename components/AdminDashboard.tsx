import React, { useState } from 'react';
import SalesGraph from './SalesGraph';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [emailList, setEmailList] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [graphData, setGraphData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const handleEmailSend = async () => {
    try {
      await axios.post('/api/send-email', { emailList });
      alert('Emails sent successfully!');
      setEmailList('');
    } catch (error) {
      console.error('Failed to send emails:', error);
    }
  };

  const handleCreateCoupon = async () => {
    try {
      await axios.post('/api/create-coupon', { couponCode, discount: couponDiscount });
      alert('Coupon created successfully!');
      setCouponCode('');
      setCouponDiscount(0);
    } catch (error) {
      console.error('Failed to create coupon:', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
        <SalesGraph data={graphData} />
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Product Management</h2>
        <button onClick={fetchProducts} className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary mb-4">
          Fetch Products
        </button>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="mb-2">{product.name}</li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Order Management</h2>
        <button onClick={fetchOrders} className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary mb-4">
          Fetch Orders
        </button>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-2">Order #{order.id} - {order.totalPrice}</li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Email and Coupon Management</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="emailList">Send Emails</label>
          <textarea
            id="emailList"
            value={emailList}
            onChange={(e) => setEmailList(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <button onClick={handleEmailSend} className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary mt-4">
            Send Emails
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2" htmlFor="couponCode">Create Coupon</label>
          <input
            type="text"
            id="couponCode"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <label className="block text-lg mb-2 mt-4" htmlFor="couponDiscount">Discount Percentage</label>
          <input
            type="number"
            id="couponDiscount"
            value={couponDiscount}
            onChange={(e) => setCouponDiscount(Number(e.target.value))}
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <button onClick={handleCreateCoupon} className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary mt-4">
            Create Coupon
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
