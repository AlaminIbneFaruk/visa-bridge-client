import Hero from "../Hero";
import Ext1 from "../Ext1";
import Ext2 from "../Ext2";
import VisaHome from "../VisaHome";
import Services from "../Services";
import VisaConsulting from "../VisaConsulting";
import Testimonials from "../Testimonials";
import VisaDenial from "../VisaDenial";

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
