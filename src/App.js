import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { Navbar } from "./Components/Header/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Landing } from "./Pages/Landing/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
