// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the Router component
import MainPage from "./LandingPage";
import ExplanationPage from "./ExplanationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/datathon_3/" element={<MainPage />} />
        <Route path="/datathon_3/howTo" element={<ExplanationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
