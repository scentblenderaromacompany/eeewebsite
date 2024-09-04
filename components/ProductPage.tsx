import React from 'react';
import ProductModal from './ProductModal';
import { useRouter } from 'next/router';

const ProductPage = ({ product }) => {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();

  const handleBuyNow = () => {
    // Logic to handle instant buy, e.g., redirect to payment page
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-primary mb-4">
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleBuyNow}
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-200"
            >
              Buy Now
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <ProductModal
      show={showModal}
      onHide={() => setShowModal(false)}
      product={product}
    />
  );
};

export default ProductPage;
