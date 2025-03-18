import { Helmet } from "react-helmet";
import Hero from "../Hero";
import Ext1 from "../Ext1";
import Ext2 from "../Ext2";
import VisaHome from "../VisaHome";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Visa Bridge</title>
        <meta name="description" content="Welcome to our website. Explore our services and offerings." />
      </Helmet>
      <div className="py-5">
        <Hero />
        <VisaHome/>
        <Ext1 />
        <Ext2 />
      </div>
    </>
  );
};

export default Home;
