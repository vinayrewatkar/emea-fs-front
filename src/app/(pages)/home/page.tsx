'use client';

import React from 'react';

export default function Home() {
  return (
    <main style={styles.main}>
      {/* Intro Section */}
      <section style={styles.intro}>
        <h1 style={styles.heading}>Welcome to EMEA</h1>
        <p style={styles.text}>
          The EMEA (Europe, Middle East, and Africa) region is a diverse and dynamic market that encompasses a wide range of cultures, economies, and business opportunities. Whether you're seeking insights, services, or opportunities tailored to your region, we are here to support your journey.
        </p>
      </section>
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
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
  },
};
