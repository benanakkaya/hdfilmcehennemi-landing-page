import Article from "./components/Article";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Upcomings from "./components/Upcomings";


function App() {
  return (
    <div className="font-roboto text-default bg-veryDark">
      <div className="xl:container p-0 lg:p-12 xl:p-16">
        <Navbar />
        <Features />
        <Upcomings />
        <div className="grid grid-cols-12 gap-1 bg-gray2">
          <Main />
          <div className="col-span-3 hidden lg:flex">
          <Sidebar />
          </div>
        </div>
        <Article />
        <Footer />
      </div>
    </div>
  );
}

export default App;
