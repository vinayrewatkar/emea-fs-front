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
};