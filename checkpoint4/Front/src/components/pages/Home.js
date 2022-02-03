import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import TripSection from '../TripSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <TripSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
