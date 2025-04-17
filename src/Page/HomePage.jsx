import React from 'react';
import Hero from '../component/Hero';
import HEader from './../component/HEader';
import TeamStanding from '../component/TeamStanding';
import StatSection from '../component/StatSection';
import Footer from '../component/Footer';

export default function HomePage() {
  return (
    <>
    <div className="min-h-screen bg-[url('/Image/stadium.jpeg')] bg-cover bg-center bg-fixed">
    <div className='min-h-screen bg-black/40'>
    <div className='space-y-12 pb-12'> 
      <div className='bg-opacity-90'>
      <Hero/>
      </div>

      <div className='bg-opacity-90'>
      <TeamStanding/>
      </div>

      <div className='bg-opacity-90'>
      <StatSection/>
      </div>


      <div className='bg-opacity-90'>
      <Footer/>
      </div>
    </div>
    </div>
      </div>
    </>
  );
}
