'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      
      

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.intro}>
          <h1 style={styles.heading}>Welcome to EMEA</h1>
          <p style={styles.text}>
            The EMEA (Europe, Middle East, and Africa) region is a diverse and dynamic market that encompasses a wide range of cultures, economies, and business opportunities. Whether you're seeking insights, services, or opportunities tailored to your region, we are here to support your journey.
          </p>
        </section>
        <section style={styles.cta}>
          <h2 style={styles.ctaHeading}>Get Involved</h2>
          <p style={styles.ctaText}>
            Are you ready to take the next step in your professional journey? Sign up for our programs or learn more about leadership in the EMEA region.
          </p>
          <div style={styles.ctaButtons}>
            <Link href="/signup">
              <button style={styles.ctaButton}>Sign Up</button>
            </Link>
            <Link href="/leadership">
              <button style={{ ...styles.ctaButton, backgroundColor: '#28a745' }}>Learn About Leadership</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

// Inline styles
const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 100px)',
    backgroundColor: '#f0f4f8',
    padding: '2rem',
  },
  intro: {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  heading: {
    fontSize: '3rem',
    color: '#003366',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.25rem',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  services: {
    width: '100%',
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#003366',
    marginBottom: '1rem',
  },
  serviceList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap' as const,
  },
  serviceCard: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '250px',
    textAlign: 'center' as const,
  },
  serviceButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#0055aa',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  cta: {
    textAlign: 'center' as const,
    marginTop: '4rem',
  },
  ctaHeading: {
    fontSize: '2.5rem',
    color: '#003366',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.25rem',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '2rem',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  ctaButton: {
    padding: '0.75rem 2rem',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.25rem',
  },
};

