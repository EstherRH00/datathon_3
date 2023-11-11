// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import the Router component
import MainPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/datathon_3" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
