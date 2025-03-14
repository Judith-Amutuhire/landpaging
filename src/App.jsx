import "./App.css";
import LandingPage from "./components/landingPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";


function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header/>
      <LandingPage />
      <Footer/>

    </div>
  );
}

export default App;