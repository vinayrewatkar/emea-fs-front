'use client';

import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
             style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)' }}></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Empowering Business Across EMEA</h1>
          <p className="text-lg mb-6">Delivering insights, strategies, and solutions tailored for Europe, the Middle East, and Africa.</p>
          <Link href="#services">
            <a className="inline-block bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100">Explore Our Services</a>
          </Link>
        </div>
      </section>

      {/* Overview of Services */}
      <section id="services" className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Image src="/path/to/strategy-icon.svg" alt="Strategy" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Strategic Planning</h3>
            <p className="mt-2">Tailored strategies to navigate the complexities of the EMEA region.</p>
          </div>
          <div className="text-center">
            <Image src="/path/to/analytics-icon.svg" alt="Analytics" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Market Analytics</h3>
            <p className="mt-2">Data-driven insights to inform decision-making and drive growth.</p>
          </div>
          <div className="text-center">
            <Image src="/path/to/consulting-icon.svg" alt="Consulting" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Consulting Services</h3>
            <p className="mt-2">Expert guidance to optimize operations and achieve business objectives.</p>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
          <div className="space-y-8">
            <blockquote className="italic text-lg">"Their insights have been invaluable in navigating the EMEA market."</blockquote>
            <cite className="text-xl font-semibold">Maher Abouzeid, CEO, GE Healthcare</cite>
            <blockquote className="italic text-lg">"A trusted partner in our strategic planning and market expansion."</blockquote>
            <cite className="text-xl font-semibold">Ashraf El Afifi, President, Henkel</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg mb-6">Partner with us to unlock new opportunities across the EMEA region.</p>
        <Link href="/contact">
          <a className="inline-block bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100">Contact Us</a>
        </Link>
      </section>
    </div>
  );
};

export default Home;
