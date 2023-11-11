// LandingPage.tsx
import React from "react";

function LandingPage() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default MainPage;
