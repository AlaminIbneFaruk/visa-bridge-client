import HeroSection from "../HeroSection";



const Work = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-extrabold mb-6">Work Visa Process</h1>
      <HeroSection
        title="Step 1: Initial Consultation"
        description="Discuss your qualifications, job offers, and target countries."
        
      />
      <HeroSection
        title="Step 2: Document Preparation"
        description="Gather all required documents, including educational and professional certifications."
        
      />
      <HeroSection
        title="Step 3: Application Submission"
        description="Submit your visa application and track the progress."
        
      />
      <HeroSection
        title="Step 4: Interview & Approval"
        description="Prepare for the visa interview and receive approval."
        
      />
      <HeroSection
        title="Step 5: Post-Approval Guidance"
        description="Understand your next steps after visa approval."
      />
    </div>
  );
};


export default Work ;
