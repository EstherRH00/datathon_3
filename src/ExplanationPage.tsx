// LandingPage.tsx
import React from "react";

function Explanation() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

class ExplanationPage extends React.Component {
  render() {
    return (
      <div>
        <Explanation />
      </div>
    );
  }
}

export default ExplanationPage;
