import React, { useState, useEffect } from 'react';

const announcements = [
  { message: 'Free shipping on orders over 00!', link: '#' },
  { message: 'Sign up for our newsletter and get 100ff!', link: '#' },
  { message: 'New arrivals coming next week!', link: '#' }
];
const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1)     }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-white p-2 text-center">
      <a href={announcements[currentIndex].link} className="hover:underline">
        {announcements[currentIndex].message}
      </a>
    </div>
  );
};

export default AnnouncementBar;
