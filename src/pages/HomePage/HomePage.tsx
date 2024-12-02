import Navbar from "@/components/HomePageComponents/Navbar";

const HomePage = () => {
  return (
    <div className="h-screen">
      <div className="bg-custom-gradient h-screen w-screen">
        <div className="container pt-4">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
