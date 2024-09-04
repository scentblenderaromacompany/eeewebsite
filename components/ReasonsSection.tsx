import React from 'react';

const reasons = [
  { image: '/images/reason1.jpg', text: 'Quality Assured', link: '/quality' },
  { image: '/images/reason2.jpg', text: 'Best Prices', link: '/prices' },
  { image: '/images/reason3.jpg', text: 'Exceptional Service', link: '/service' }
];
const ReasonsSection = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold mb-8">How We Earn Your Business</h2>
      <div className="flex justify-center space-x-8">
        {reasons.map((reason, index) => (
          <div key={index} className="relative group w-1/3">
            <img src={reason.image} alt={reason.text} className="w-full h-full object-cover rounded-lg group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a href={reason.link} className="text-xl font-bold">{reason.text}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
