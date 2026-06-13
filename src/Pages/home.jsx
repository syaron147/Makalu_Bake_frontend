import React from 'react';
import Hero from '../Components/hero';
import FeaturedItems from '../Components/featureditems';
import About from '../Components/about';
import Testimonials from '../Components/testimonials';
import CTA from '../Components/cta';

function Home() {
  return (
    <>
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <FeaturedItems />
        <About />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}

export default Home;