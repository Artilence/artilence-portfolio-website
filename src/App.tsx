import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Clients />
    </Layout>
  );
}

export default App;
