import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-contain bg-no-repeat bg-right">
            <Navbar />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
