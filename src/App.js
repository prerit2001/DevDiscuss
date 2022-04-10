import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { Navbar } from "./Components/Header/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Landing } from "./Pages/Landing/Landing";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Community } from "./Pages/Community/Community";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Navbar />
          <div style={{}}>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/community" element={<Community />} />
            </Routes>
          </div>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
