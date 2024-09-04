import React from 'react';
import ProductGrid from '../components/ProductGrid';
import AnnouncementBar from '../components/AnnouncementBar';
import HeroSection from '../components/HeroSection';
import ReviewSection from '../components/ReviewSection';
import SubscriptionBox from '../components/SubscriptionBox';
import Footer from '../components/Footer';
import { fetchProducts } from '../lib/api';

const HomePage = ({ products }) => {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">Featured Products</h1>
        <ProductGrid products={products} />
      </div>
      <ReviewSection />
      <SubscriptionBox />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default HomePage;
