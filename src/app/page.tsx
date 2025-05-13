'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/';

export default function Home() {
  return (
    <>
      <Head>
        <title>EMEA Homepage</title>
        <meta name="description" content="Welcome to the EMEA regional website." />
      </Head>
      

      {/* Header */}
      

      {/* Main Content */}
      <main style={styles.main}>
      <div style={styles.background} />
      <div style={styles.content}>
        <h1 className="text-center text-4xl font-mono">
          <div className="typewriter-loop">
            <span className="typewriter-content">Welcome to EMEA</span>
          </div>
        </h1>


        <p style={styles.text}>
          The EMEA (Europe, Middle East, and Africa) region covers a vast and diverse market.
          Explore updates, services, and opportunities tailored to your region.
        </p>
        </div>

      </main>
      {/* MAIN CONTENT */}

      <section id="about" style={styles.aboutSection}>
  <div className="w-full px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
      
      {/* Left Column - Aligned Left */}
      <div className="w-full lg:w-5/9 lg:ml-0" data-aos="fade-up" data-aos-delay="100" style={{ textAlign: 'justify' }}>
        <h1 className="text-3xl font-bold mb-4">Swapnil Wani</h1>
        <img
          src="/swapnilwani.png"
          alt="Swapnil Wani"
          className="rounded-md mb-4"
          style={{ width: '45%' }}
        />
        <h4 className="text-lg font-semibold mb-4">
          Industry Group Lead - FS, ATCI
        </h4>
        <p className="mb-4">
          I am delighted to welcome you to the Delivery Dashboard, a game-changing platform designed to enhance efficiency and streamline your delivery operations. As leaders, we understand the critical role that seamless logistics and timely deliveries play in ensuring customer satisfaction and business success. This dashboard has been developed with cutting-edge technology to empower your operations and drive excellence.
        </p>
        <p className="mb-4">
          Our goal is to provide you with a comprehensive tool that not only optimizes delivery routes but also offers real-time tracking, data-driven insights, and enhanced communication channels. By leveraging this platform, we can enhance efficiency, improve performance, and exceed customer expectations.
        </p>
        <p className="mb-4">
          At the heart of this initiative is our commitment to innovation and excellence. We encourage you to explore the features of the Delivery Dashboard and utilize it to its fullest potential. Our team is here to support you every step of the way as we embark on this journey together.
        </p>
        <p>Let’s work together to achieve new milestones!</p>
      </div>

      {/* Right Column - Aligned Right */}
      <div className="w-full lg:w-5/10 lg:mr-0 text-right" data-aos="fade-up" data-aos-delay="250">
        <div className="content">
          <div className="content text-center">
    <h3 className="text-2xl font-semibold mb-4">
      Financial Services @ EMEA ATCi
    </h3>
    <p className="italic text-black mb-4">
      From India, we serve 100+ Global Banking, Capital Market and Insurance clients in EMEA...
    </p>
    <div className="relative mt-4">
      <img
        src="/Welcome_page.jpg"
        alt="Welcome"
        className="rounded-md w-full"
      />
       </div>
       </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}

// Inline styles
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#003366',
    color: '#fff',
    flexWrap: 'wrap' as const,
    zIndex: 2,
    position: 'relative' as const,
  },
  logo: {
    fontSize: '1.8rem',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },
  navButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#0055aa',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  auth: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap' as const,
  },
  authButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  main: {
    position: 'relative' as const,
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/image3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(0.6) blur(1px)',
    zIndex: 0,
  },
  content: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
    color: 'white',
    padding: '2rem',
    maxWidth: '800px',
  },
  animatedHeading: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    color: '#ffffff',
  },
  text: {
    fontSize: '1.25rem',
    color: '#ffffff',
  },

  section: {
  padding: '4rem 2rem',
  backgroundColor: '#f5f5f5',
  color: '#111',
  textAlign: 'center' as const,
},

sectionHeading: {
  fontSize: '2rem',
  marginBottom: '1rem',
  fontWeight: 'bold',
},

sectionText: {
  fontSize: '1.125rem',
  maxWidth: '600px',
  margin: '0 auto 2rem',
},

grid: {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '1.5rem',
  justifyContent: 'center',
},

card: {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  width: '250px',
  fontWeight: '500',
},
aboutSection: {
  padding: '4rem 0',
  backgroundColor: '#f9f9f9',
  color: '#111',
},



};