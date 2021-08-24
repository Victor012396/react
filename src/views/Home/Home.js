import React from 'react';
import Navbar from '../../components/layout/navbar/Navbar';
import Footer from '../../components/layout/footer/Footer';

export default function Home() {
  return (
    <>
    <div className="app"> 
          <Navbar title="PATITAS DE LA CALLE"/> 
          <Footer />
        </div>
    </>
  );
}