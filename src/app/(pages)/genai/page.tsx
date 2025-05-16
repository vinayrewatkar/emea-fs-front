import React from 'react';
import Link from 'next/link';

const Page = () => {


const initiatives = [
    {
      name: 'Capgemini Generative AI Lab',
      description: 'A dedicated lab focusing on AI research and development.',
      link: 'https://www.capgemini.com/us-en/services/data-and-ai/generative-ai/'
    },
    {
      name: 'VMware Multi-Cloud Approach',
      description: 'Emphasizing multi-cloud environments to accelerate generative AI.',
      link: 'https://blogs.vmware.com/emea-en/tag/generative-ai/'
    },
    {
      name: 'Aleph Alpha (Germany)',
      description: 'Developing large language models compliant with EU data regulations.',
      link: 'https://aleph-alpha.com'
    },
    {
      name: 'LightOn (France)',
      description: 'Focusing on optical processing units and large language models.',
      link: 'https://lighton.ai'
    },
    {
      name: 'Adobe Generative Tools at EMEA Summit',
      description: 'Showcasing generative AI tools for creative industries.',
      link: 'https://bernardmarr.com/unleashing-creativity-with-ai-adobes-trailblazing-generative-tools-at-emea-summit-2023/'
    }
  ];


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
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      padding: '20px',
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ textAlign: 'center' }}>Generative AI Initiatives in EMEA</h2><br></br>
        <ul>
          {initiatives.map((initiative, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <a href={initiative.link} target="_blank" rel="noopener noreferrer">
                <strong>{initiative.name}</strong>
              </a>
              <p>{initiative.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  








  
);
};

export default Page;
