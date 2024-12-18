// components/ListingSection.tsx
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const ListingSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
        <div
          key={property.name}
          className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold">{property.name}</h2>
          <p className="text-gray-600">{`${property.address.city}, ${property.address.country}`}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-yellow-400">{`${property.rating}★`}</span>
            <span className="text-lg font-semibold">{`$${property.price}/night`}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListingSection;
