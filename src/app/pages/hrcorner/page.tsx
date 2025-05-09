import React from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';
 
const HrCorner: React.FC = () => {

  const router = useRouter();
 
  return (
<div className="min-h-screen bg-gray-100 p-6">
<header className="text-center mb-12">
<h1 className="text-4xl font-bold text-blue-600">HR Corner</h1>
<p className="mt-2 text-lg">Resources, benefits, and support for employees</p>
<div className="mt-4">
<Link href="/login" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">

            HR Dashboard
</Link>
</div>
</header>
 
      {/* Existing sections... */}
 
      <section className="mt-12 max-w-xl mx-auto">
<h2 className="text-2xl font-semibold mb-4">💬 Contact HR</h2>
<form className="space-y-4 bg-white p-6 rounded shadow">
<input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded" />
<input type="email" placeholder="Your Email" className="w-full border px-3 py-2 rounded" />
<textarea placeholder="Your Message" className="w-full border px-3 py-2 rounded"></textarea>
<button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">

            Submit
</button>
</form>
</section>
</div>

  );

};
 
export default HrCorner;

 