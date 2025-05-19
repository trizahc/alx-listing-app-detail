import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <h1 className="text-2xl font-bold mb-4">Featured Listings</h1>

      <div className="flex flex-wrap gap-6">
        <Card
          image="/assets/placeholder.jpg"
          title="Cozy Apartment"
          description="2 bed, 1 bath in downtown Nairobi."
        />
        <Card
          image="/assets/placeholder.jpg"
          title="Modern Loft"
          description="1 bed, 1 bath with rooftop access."
        />
      </div>

      <div className="mt-6">
        <Button label="Book Now" onClick={() => alert("Booking...")} />
      </div>
    </div>
  );
}

