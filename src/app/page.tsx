'use client';

import React from 'react';
import Image from "next/";
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EMEA Homepage</title>
        <meta name="description" content="Welcome to the EMEA regional website." />
      </Head>

      {/* Header */}
      <header style={styles.header}>
        <h2 style={styles.logo}>EMEA</h2>

        {/* Navigation Buttons */}
        <nav style={styles.nav}>
          <Link href="/" passHref>
            <button style={styles.navButton}>Home</button>
          </Link>
          <Link href="/leadership" passHref>
            <button style={styles.navButton}>Leadership</button>
          </Link>
          <Link href="/hrcorner" passHref>
            <button style={styles.navButton}>HR Corner</button>
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div style={styles.auth}>
          <Link href="/login" passHref>
            <button style={styles.authButton}>Login</button>
          </Link>
          <Link href="/signup" passHref>
            <button style={{ ...styles.authButton, backgroundColor: '#28a745' }}>Sign Up</button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.heading}>Welcome to EMEA</h1>
        <p style={styles.text}>
          The EMEA (Europe, Middle East, and Africa) region covers a vast and diverse market.
          Explore updates, services, and opportunities tailored to your region.
        </p>
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
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 100px)',
    backgroundColor: '#f0f4f8',
    padding: '2rem',
  },
  heading: {
    fontSize: '3rem',
    color: '#003366',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.25rem',
    color: '#333',
    maxWidth: '600px',
    textAlign: 'center' as const,
  },
};
