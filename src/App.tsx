import Clients from "./components/Clients";
import Connect from "./components/Connect";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar3";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Clients />
        <Services />
        {/* <Testimonials /> */}
        <Connect />
      </Layout>
    </>
  );
}

export default App;
