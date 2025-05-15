'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EMEA Homepage</title>
        <meta name="description" content="Welcome to the EMEA regional website." />
      </Head>

      {/* Main Content */}
      <main className="relative min-h-[calc(100vh-100px)] flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 blur-none" style={{ backgroundImage: 'url("/image3.jpg")' }} />
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl font-mono mb-4">
              <div className="typewriter-loop">
                  <span>Welcome to EMEA</span>
              </div>
          </h1>

          <p className="text-xl">
            The EMEA (Europe, Middle East, and Africa) region covers a vast and diverse market.
            Explore updates, services, and opportunities tailored to your region.
          </p>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-gray-900">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">

            {/* Left Column */}
            <div className="w-full lg:w-1/2 text-justify" data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-3xl font-bold mb-4">Swapnil Wani</h1>
              <img
                src="/swapnilwani.png"
                alt="Swapnil Wani"
                className="rounded-md mb-4 w-2/5"
              />
              <h4 className="text-lg font-semibold mb-4">
                Industry Group Lead - FS, ATCI
              </h4>
              <p className="mb-4">
                I am delighted to welcome you to the Delivery Dashboard, a game-changing platform designed to enhance efficiency and streamline your delivery operations. As leaders, we understand the critical role that seamless logistics and timely deliveries play in ensuring customer satisfaction and business success. This dashboard has been developed with cutting-edge technology to empower your operations and drive excellence.
              </p>
              <p className="mb-4">
                Our goal is to provide you with a comprehensive tool that not only optimizes delivery routes but also offers real-time tracking, data-driven insights, and enhanced communication channels. By leveraging this platform, we can enhance efficiency, improve performance, and exceed customer expectations.
              </p>
              <p className="mb-4">
                At the heart of this initiative is our commitment to innovation and excellence. We encourage you to explore the features of the Delivery Dashboard and utilize it to its fullest potential. Our team is here to support you every step of the way as we embark on this journey together.
              </p>
              <p>Let’s work together to achieve new milestones!</p>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 text-right" data-aos="fade-up" data-aos-delay="250">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Financial Services @ EMEA ATCi
                </h3>
                <p className="italic text-black mb-4">
                  From India, we serve 100+ Global Banking, Capital Market and Insurance clients in EMEA...
                </p>
                <div className="relative mt-4">
                  <img
                    src="/Welcome_page.jpg"
                    alt="Welcome"
                    className="rounded-md w-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
