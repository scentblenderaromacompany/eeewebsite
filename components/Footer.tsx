import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Eternal Elegance Emporium. All rights reserved.</p>
        <p>
          <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a> | 
          <a href="/terms" className="text-secondary hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
