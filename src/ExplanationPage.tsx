// LandingPage.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CorrCard from "./CorrCard";

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
        <li>Did COVID affect the data? If so, how?</li>
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
        First of all; lets list the most relevant columns of the dataset
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li><span className="font-bold">CODIGO:</span> Code for the product. The first letter marks the category.</li>
        <li><span className="font-bold">FECHAPEDIDO:</span> Day when the order was placed</li>
        <li><span className="font-bold">CANTIDADCOMPRA:</span> Amount bought (number of packages)</li>
        <li><span className="font-bold">UNIDADESCONSUMOCONTENIDAS:</span> Amount in each unit (amount of product in each
          package)
        </li>
        <li><span className="font-bold">ORIGEN:</span> Where the order was placed as Region_ID - Hospital_ID -
          Department_ID
        </li>
        <li>TODO</li>
      </ul>
      <p className="pt-2 text-ml">
        During the data exploration, we found some interesting properties that we want to highlight:
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li>Each product can be uniquely identified by their code (<span className="font-bold">CODIGO</span>) and the
          amount
          of items per package (<span className="font-bold">UNIDADESCONSUMOCONTENIDAS</span>)
        </li>
        <li>There are 20 hospitals in the first region (0) and one hospital in the region 1. The difference in the
          amount of
          hospitals in each region made us decide not to take regions into account and only consider hospitals.
        </li>
        <li>There are 4 possible categories in which products fall, according to the first digit of their CODE: B, C, D
          and E.
          We might be able to use those to find some correlation between the products in one category.
        </li>
      </ul>

      <p className="pt-2 text-ml">
        And with this insight we decided to add the following columns:
      </p>
      <ul className="pt-2 pl-4 list-disc marker:text-green-600">
        <li>month: extracted from FECHAPEDIDO.</li>
        <li>year: extracted from FECHAPEDIDO.</li>
        <li>id_hospital: extracted from ORIGEN; we maintained the id for the hospitals in the Region 0 and gave the id
          '20'
          to the hospital in the Region 1.
        </li>
        <li>id_department: extracted from ORIGEN.</li>
        <li>total_units: computed as the product of CANTIDADCOMPRA and UNIDADESCONSUMOCONTENIDAS.</li>
      </ul>

      <p className="pt-2 text-2xl">
        Correlation
      </p>
      <p className="pt-2 text-ml">
        We will study the correlation in between the products of each category and between categories; and with that
        information
        decide if we investigate more.
      </p>
      <p className="pt-2 text-lg">
        Between products in the same category:
      </p>
      <div className="grid grid-cols-2">
        <CorrCard image={require("./images/B_corr.PNG")} text={"Correlation between products in B"}/>
        <CorrCard image={require("./images/C_corr.PNG")} text={"Correlation between products in C"}/>
        <CorrCard image={require("./images/E_corr.PNG")} text={"Correlation between products in E"}/>
        <CorrCard image={require("./images/F_corr.PNG")} text={"Correlation between products in F"}/>
      </div>
      <p className="pt-2 text-lg">
        Between categories:
      </p>
      <div className="grid grid-cols-2">
        <CorrCard image={require("./images/BCED_corr.PNG")} text={"Correlation between categories"}/>
      </div>
      <p className="pt-2 text-ml">
        Seeing the high correlation between the products in category B and F, and since category B has only 2 products,
        we decide to
        compute the correlation between all the products in categories B and F
      </p>
      <div className="grid grid-cols-2">
        <CorrCard image={require("./images/BF_corr.PNG")}
                  text={"Correlation between the products in categories B and F"}/>
      </div>
      <p className="pt-2 text-ml">
        Lastly, we compute the correlation between all the products and extract the ones that score more than 0.75;
        obtaining
        the following:
      </p>
      <p>Product pairs with correlation &gt; 0.75:</p>
      <div className="flex grid-cols-3 w-full">
        <div>
        <ul className="list-none">
          <li>B41691 and E64544: 0.80</li>
          <li>
            B41691 and E78950: 0.84
          </li>
          <li>
            B41691 and E99807: 0.88
          </li>
          <li>
            B41691 and F43580: 0.76
          </li>
          <li>
            E64544 and E78950: 0.78
          </li>
          <li>
            E64544 and E99807: 0.86
          </li>
          <li>
            E64544 and E99808: 0.76
          </li>

        </ul>
        </div>
        <div className="m-5"></div>
        <div>
        <ul className="list-none">
          <li>
            E64932 and E99807: 0.76
          </li>
          <li>
            E64932 and E99808: 0.78
          </li>
          <li>
            E78950 and E99807: 0.83
          </li>
          <li>
            E78950 and F43580: 0.75
          </li>
          <li>
            E85758 and E99808: 0.75
          </li>
          <li>
            E99807 and E99808: 0.77
          </li>
          <li>
            F46843 and F46846: 0.81
          </li>

        </ul>
        </div>
      </div>

      <p className="pt-2 text-2xl">
        Seasonality
      </p>
      <p className="pt-2 text-ml">
        We will try to find seasonal items; in order to do that, we add, by month, the total amount of the product bought;
        as a sum between all hospitals. With this, we also expect to see if COVID did have some effect in the tendencies of
        product shopping.
        <br/>
        We have plotted all the products and compared them, but we have not found any periodical pattern, nor have we
        found the years 2020 and 2021 to be outliers.
        <br/>
        Below these lines we show one plot that exemplifies what we have just described, and all of the plots can be found
        in the notebook.
      </p>
      <div className="grid grid-cols-2">
        <CorrCard image={require("./images/E65159.PNG")}
                  text={"Total amount of E65159 bought each month of each year."}/>
      </div>
      <p className="pt-2 text-2xl">
        Expiration date approximation
      </p>
      <p className="pt-2 text-ml">

      </p>
      <hr className="h-px my-8 border-0 bg-green-300"/>
      <h1 className="text-3xl py-2.5">Model training and prediction</h1>
      <p className="pt-2 text-ml">
        [PLACEHOLDER]
      </p>

      <Footer/>

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
