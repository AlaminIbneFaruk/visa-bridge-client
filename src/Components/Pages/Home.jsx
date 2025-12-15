import Hero from "../Home/Hero";
import Ext1 from "../Home/Ext1";
import Ext2 from "../Home/Ext2";
import VisaHome from "../Home/VisaHome";
import Services from "../Home/Services";
import VisaConsulting from "../Home/VisaConsulting";
import Testimonials from "../Testimonials";
import VisaDenial from "../Home/VisaDenial";

const Home = () => {
  return (
    <>
        <Hero />
        <Ext1 />
        <Services/>
        <VisaHome/>
        <VisaConsulting/>
        <Testimonials/>
        <Ext2 />
        <VisaDenial/>
    </>
  );
};

export default Home;
