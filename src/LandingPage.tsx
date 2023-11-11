// LandingPage.tsx
import React from "react";

function LandingPage() {
  return (
    <div className="bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto">
      <h1 className="text-white">Home</h1>
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
