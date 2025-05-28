import LeftSideBar from "./Components/LeftSideBar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar NAVIGATION */}
        <LeftSideBar />
        <main className="ml-[275px] p-6 mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-2xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32">
            
          </div>
        </main>

        <section className="hidden md:block p-8">Right section</section>
      </div>
    </div>
  );
};

export default Home;
