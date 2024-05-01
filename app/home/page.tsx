"use client";

import { LogoCloud } from '../components/LogoCloud/LogoCloud'
import { Hero } from '../components/Hero/Hero'
import { HeroImage } from '../components/Sections/HeroImage'
import { ScrollFeature } from '../components/ScrollFeature/ScrollFeature'
import GetNotified from '../components/Sections/GetNotified';
import OurTeam from '../components/OurTeam/OurTeam';
import { ProductFeature } from '../components/ProductFeature/ProductFeature';
import { Footer } from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <Hero />
        {/* Info Card Section */}
        <HeroImage />
        {/* SUPPORTED NETWORKS */}
        <LogoCloud />
        {/* Feature section */}
        <ScrollFeature />
        {/* Product Feature */}
        <ProductFeature />
        {/* Request Demo */}
        <GetNotified />
        {/* Our Team */}
        <OurTeam />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home;