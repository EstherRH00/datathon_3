// LandingPage.tsx
import React from "react";

function Explanation() {
  return (
    <div className="m-5 text-primary-color bg-box-color">
      <h1 className="text-primary-color">How did we make this happen</h1>
      <p>
        First of all we dove deep into the data and, using mainly pandas, explored the dataset.
        <br/>
        We observe that with the code (CODIGO) and the number of units per pack (UNIDADESCONSUMOCONTENIDAS) we can identify
        each pack of each item.
        <br/>
        The orders are from years 2016-2023
      </p>
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
