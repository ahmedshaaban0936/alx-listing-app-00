// pages/index.tsx
import Hero from "@/components/Hero";
import FilterSection from "@/components/FilterSection";
import ListingSection from "@/components/ListingSection";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <FilterSection />
      <ListingSection />
    </div>
  );
};

export default IndexPage;
