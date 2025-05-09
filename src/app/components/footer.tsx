'use client'
// app/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="w-full px-4 py-3 mt-auto bg-gray-100 border-t border-gray-300 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} My Next App. All rights reserved.</p>
      </footer>
    );
  }
  