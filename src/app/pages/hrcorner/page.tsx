import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (

    
    <div className="min-h-screen bg-gray-100">
      {/*NAVBAR */}
      <div>
      <nav
    className="bg-blue-950 text-white px-6 py-4 flex justify-between items-center shadow"
    style={{
    padding: '1.5em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2em',
  }}
>
        <h2 style =  {{color:'white',float:'left',fontWeight:'bold', fontSize:'20'}}>HR Corner</h2>

         <ul style={{ listStyleType: 'none', display: 'flex', gap: '1em', margin: 0, padding: 0 }}>
          
           <li style={{ color: 'white' }}>
              <Link href="/" style={{ color: 'orange', textDecoration: 'none' }}>Home</Link>
           </li>
           <li style = {{color:'gray'}}><p>/</p> </li>

           <li style={{ color: 'white'}}>
              <Link href="/pages/hrcorner" style={{ color: 'white', textDecoration: 'none' }}>HR Corner</Link>
           </li>
        </ul>
      </nav>
      </div>

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">HR Corner</h1>
        <p className="mt-2 text-lg">Resources, benefits, and support for employees</p>
        <div className="mt-4">
          <Link
            href="/login"
            className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            HR Dashboard
          </Link>
        </div>
      </header>

      {/* Contact HR Section */}
      <section className="mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">💬 Contact HR</h2>
        <form className="space-y-4 bg-white p-6 rounded shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
