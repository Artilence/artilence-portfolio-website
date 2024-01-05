import Clients from "./components/Clients";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar3";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <Layout>
        <Hero />
      </Layout>
      <Clients />
      <Services />
      <Testimonials />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
