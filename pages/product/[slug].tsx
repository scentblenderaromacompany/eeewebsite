import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { fetchProductBySlug, fetchProductSlugs } from '../../lib/api';

const ProductPage = ({ product }) => {
  const [showPayment, setShowPayment] = React.useState(false);

  const handleBuyNow = () => {
    setShowPayment(true);
  };

  return (
    <Layout title={product.name}>
      <Head>
        <title>{product.name} - Eternal Elegance Emporium</title>
      </Head>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-5 md:mt-0">
            <h1 className="text-4xl font-bold text-primary">{product.name}</h1>
            <p className="text-secondary text-lg mt-4">{product.description}</p>
            <ul className="list-disc pl-5 mt-4 text-secondary">
              <li>Material: {product.metadata.material}</li>
              <li>Condition: {product.metadata.condition}</li>
              <li>Brand: {product.metadata.brand}</li>
            </ul>
            <p className="text-3xl font-bold text-primary mt-6">Price: ${product.price / 100}</p>
            {!showPayment ? (
              <div className="mt-5">
                <button
                  className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
            ) : (
              <div className="mt-5">
                <h2 className="text-xl font-bold text-primary">Payment Information</h2>
                {/* Include payment form or Stripe checkout integration here */}
              </div>
            )}
          </div>
