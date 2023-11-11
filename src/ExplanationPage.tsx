// LandingPage.tsx
import React from "react";
import Header from "./Header";

function Explanation() {
  return (
    <div className="m-5 bg-box-color p-5">
      <Header destination={"/datathon_3"} button_text={"Home"}/>

      <h1 className="text-5xl py-2.5">How did we make this happen</h1>
      <p className="text-ml">
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
