import WellBellLandingPage from "./components/Home";
import Personalized from "./components/Personalized";
import Chatbot from "./components/Chatbot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WellBellLandingPage />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/personalized" element={<Personalized />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
