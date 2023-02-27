import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Upcomings from "./components/Upcomings";


function App() {
  return (
    <div className="font-roboto text-default bg-veryDark">
      <div className="xl:container p-0 lg:p-12 xl:p-16">
        <Navbar />
        <Features/>
        <Upcomings/>
      </div>
    </div>
  );
}

export default App;
