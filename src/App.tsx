import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
    </Layout>
  );
}

export default App;
