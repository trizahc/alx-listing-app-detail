import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p className="text-center mt-10 text-red-500">Property not found</p>;

  return (
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
      {/* Main content */}
      <div className="md:col-span-2">
        <PropertyDetail property={property} />
        <ReviewSection reviews={property.reviews || []} />
      </div>

      {/* Booking section */}
      <div className="md:col-span-1">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}
