import React from 'react';

const SubscriptionBox = () => {
  return (
    <div className="bg-secondary p-5 text-center mt-10">
      <h2 className="text-3xl text-primary font-bold">Subscribe to Our Newsletter</h2>
      <p className="mt-3 text-lg text-white">Join our community to receive the latest news and exclusive offers!</p>
      <form className="mt-5">
        <input type="email" placeholder="Enter your email" className="p-2 rounded-md text-primary" required />
        <button type="submit" className="ml-2 bg-primary text-white p-2 rounded-md hover:bg-text_color">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionBox;
