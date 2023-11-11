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
        First of all; lets list the most rellevant columns of the dataset
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li><span className="font-bold">CODIGO:</span> Code for the product</li>
        <li><span className="font-bold">FECHAPEDIDO:</span> Day when the order was placed</li>
        <li><span className="font-bold">CANTIDADCOMPRA:</span> Amount bought (number of packages)</li>
        <li><span className="font-bold">UNIDADESCONSUMOCONTENIDAS:</span> Amount in each unit (amount of product in each package)</li>
        <li><span className="font-bold">ORIGEN:</span> Where the order was placed as RegionID - HospitalID - DepartmentID</li>

      </ul>
      <p className="pt-2 text-ml">
        During the data exploration, we found some interesting properties that we want to highlight:
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li>Each product can be uniquely identified by their code (<span className="font-bold">CODIGO</span>) and the amount
        of items per package (<span className="font-bold">UNIDADESCONSUMOCONTENIDAS</span>)</li>
        <li>There are 20 hospitals in the first region (0) and one hospital in the region 1. The difference in the amount of
        hospitals in each region made us decide not to take regions into account and only consider hospitals.</li>
      </ul>

      <p className="pt-2 text-ml">
        And with this insight we decided to add the following columns:
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li>month: extracted from FECHAPEDIDO.</li>
        <li>year: extracted from FECHAPEDIDO.</li>
        <li>id_hospital: extracted from ORIGEN; we maintained the id for the hospitals in the Region 0 and gave the id '20'
        to the hospital in the Region 1.</li>
        <li>id_department: extracted from ORIGEN.</li>
        <li>total_units: computed as the product of CANTIDADCOMPRA and UNIDADESCONSUMOCONTENIDAS.</li>
      </ul>
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
