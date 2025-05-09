// app/page.tsx or app/home/page.tsx depending on your structure
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">EMEA FS Dashboard</h1>
        <p className="text-center text-gray-600">
          Your gateway to Financial Services insights, performance, and capabilities across EMEA.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="About" href="/about" />
          <Card title="Contact" href="/contact" />
          <Card title="Capabilities" href="/capabilities" />
        </div>
      </main>
    );
  }
  
  function Card({ title, href }: { title: string; href: string }) {
    return (
      <a href={href} className="p-4 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">Learn more about {title}</p>
      </a>
  );
}
