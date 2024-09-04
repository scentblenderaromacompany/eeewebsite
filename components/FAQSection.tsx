import React from 'react';

const faqs = [
  { question: 'What is your return policy?', answer: 'You can return products within 30 days for a full refund.' },
  { question: 'How long does shipping take?', answer: 'Shipping takes 3-5 business days.' },
  { question: 'Do you provide international shipping?', answer: 'Yes, we ship internationally with additional shipping costs.' }
];

const FAQSection = () => {
  return (
    <section className="py-10 bg-light">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="faq-carousel space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-box p-4 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
