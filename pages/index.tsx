import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import Pill from "@/components/Pill";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-100 h-[300px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-gray-800">Find your favorite place here!</h1>
          <p className="text-lg text-gray-700 mt-2">The best prices for over 2 million properties worldwide.</p>
          import Pill from "@/components/Pill"; // Make sure this is at the top of your file

// Inside the return() JSX of your Home page
<div className="flex flex-wrap gap-3 mt-6">
  {["Top Villa", "Self Checkin", "Countryside", "Beachfront", "Rooms"].map((label, index) => (
    <Pill key={index} label={label} />
  ))}
</div>

        </div>
      </section>
    </div>
  );
}
