import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Leadershippage = () => {

  return (
    
    <div>
      {/*NAVIGATION BAR*/ }
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
        <h2 style =  {{color:'white',float:'left',fontWeight:'bold', fontSize:'20'}}>Leadership Team</h2>

         <ul style={{ listStyleType: 'none', display: 'flex', gap: '1em', margin: 0, padding: 0 }}>
          
           <li style={{ color: 'white' }}>
              <Link href="/" style={{ color: 'orange', textDecoration: 'none' }}>Home</Link>
           </li>
           <li style = {{color:'gray'}}><p>/</p> </li>

           <li style={{ color: 'white'}}>
              <Link href="/pages/LeadershipTeam" style={{ color: 'white', textDecoration: 'none' }}>Leadership Team</Link>
           </li>
        </ul>
      </nav>
      </div>


      {/* IMAGE OF LEADERSHIP TEAM*/}
      <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Image
               src = "/EMEA-FS.jpg"
               width = {1100}
               height={2000}
               alt="images"/>
      </div>
    </div>
    
  );
};

export default Leadershippage;