// components/FilterSection.tsx
import Pill from "@/components/Pill"; // Assuming you have a Pill component

const FilterSection = () => {
  const filters = ["Top Villa", "Self Checkin", "Pet Friendly"];

  return (
    <div className="flex justify-center mt-10">
      {filters.map((filter) => (
        <Pill key={filter} label={filter} />
      ))}
    </div>
  );
};

export default FilterSection;
