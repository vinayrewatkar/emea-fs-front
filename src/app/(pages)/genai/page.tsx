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
      }}>
        <h2 style =  {{color:'white',float:'left',fontWeight:'bold', fontSize:'20'}}>GEN AI</h2>

         <ul style={{ listStyleType: 'none', display: 'flex', gap: '1em', margin: 0, padding: 0 }}>
          
           <li style={{ color: 'white' }}>
              <Link href="/" style={{ color: 'orange', textDecoration: 'none' }}>Home</Link>
           </li>
           <li style = {{color:'gray'}}><p>/</p> </li>

           <li style={{ color: 'white'}}>
              <Link href="/pages/hrcorner" style={{ color: 'white', textDecoration: 'none' }}>GEN AI</Link>
           </li>
        </ul>
      </nav>
      </div>
  </div>
  
);
};

export default Page;
