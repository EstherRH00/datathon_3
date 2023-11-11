// LandingPage.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Explanation() {
  return (
    <div className="m-5 bg-box-color p-5">
      <Header destination={"/datathon_3"} button_text={"Home"}/>

      <h1 className="text-3xl py-2.5">Roadmap</h1>
      <p className="pt-2 text-ml">
        First of all we dove deep into the data and, using mainly pandas, explored the dataset; we were looking to
        answer
        the following questions:
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li>How can we give a broad description of the data?</li>
        <li>Did COVID afect the data? If so, how?</li>
        <li>Are there any periodic events?</li>
        <li>What is the shelf life of each product?</li>
        <li>Are any products co-related?</li>
      </ul>
      <p className="pt-2 text-ml">
        Afterwards we trained [PLACEHOLDER]
      </p>
      <hr className="h-px my-8 border-0 bg-green-300"/>
      <h1 className="text-3xl py-2.5">Data exploration</h1>
      <p className="pt-2 text-ml">
        During the data exploration, we found some interesting properties that we want to highlight:
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li>How can we give a broad description of the data?</li>
      </ul>

      <p className="pt-2 text-ml">
        And with this insight we decided to add the following columns:
      </p>
      <hr className="h-px my-8 border-0 bg-green-300"/>
      <h1 className="text-3xl py-2.5">Model training and prediction</h1>
      <p className="pt-2 text-ml">
        [PLACEHOLDER]
      </p>

      <Footer />

    </div>
  );
}

class ExplanationPage extends React.Component {
  render() {
    return (
      <div>
        <Explanation/>
      </div>
    );
  }
}

export default ExplanationPage;
