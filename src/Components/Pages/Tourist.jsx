import HeroSection from "../HeroSection";

const Tourist = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-extrabold mb-6">Tourist Visa Process</h1>
      <HeroSection
        title="Step 1: Destination Selection"
        description="Choose your travel destination and understand the visa requirements."
        
      />
      <HeroSection
        title="Step 2: Documentation"
        description="Prepare travel documents, including passport, itinerary, and insurance."
        
      />
      <HeroSection
        title="Step 3: Visa Application"
        description="Submit your application along with supporting documents."
        
      />
      <HeroSection
        title="Step 4: Processing & Updates"
        description="Track your application status and follow up if needed."
        
      />
      <HeroSection
        title="Step 5: Travel Preparation"
        description="Get ready for your trip with tips on packing and safety."
        
      />
    </div>
  );
};
export default Tourist;