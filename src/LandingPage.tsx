// LandingPage.tsx
import React, {useState} from "react";
import illa_1 from "./images/left_land.png";
import illa_2 from "./images/right_land.png";
import pin_hospital from "./images/pin_hospital.png";
import ShowInfoModalWindow from "./ShowInfoModalWindow";
import Header from "./Header";
import Footer from "./Footer";

function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);

  const onClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="m-5 bg-box-color p-5">
      <Header destination={"/datathon_3/howTo"} button_text={"Learn more"}/>
      <div
        className="bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto flex items-center justify-center">
        <div className="flex items-center relative">
          <div className="w-2/3 relative">
            <h1 className="text-4xl text-letter-color font-bold text-center">
              Zone 0
            </h1>
            <img className="h-[550px] w-[950px]" src={illa_1} alt="left"/>

            {/* hospital 1 */}
            <button
              className="absolute top-1/3 left-1/4 transform -translate-x-1/6 -translate-y-1"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 2 */}
            <button
              className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 3 */}
            <button
              className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 4 */}
            <button
              className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 5 */}
            <button
              className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 6 */}
            <button
              className="absolute top-20 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 7 */}
            <button
              className="absolute top-[300px] left-20 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 8 */}
            <button
              className="absolute top-[400px] left-1/3 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 9 */}
            <button
              className="absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 10 */}
            <button
              className="absolute top-[350px] left-[50px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 11 */}
            <button
              className="absolute top-[200px] left-[50px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 12 */}
            <button
              className="absolute top-[400px] left-[700px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 13 */}
            <button
              className="absolute top-[230px] left-[400px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 14 */}
            <button
              className="absolute top-[460px] left-[400px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 15 */}
            <button
              className="absolute top-[530px] left-[400px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 16 */}
            <button
              className="absolute top-[130px] left-[500px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 17 */}
            <button
              className="absolute top-[430px] left-[200px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 18 */}
            <button
              className="absolute top-[130px] left-[400px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>

            {/* hospital 19 */}
            <button
              className="absolute top-[330px] left-[200px] transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>
          </div>

          <div className="w-1/3 relative">
            <h1 className="text-4xl text-letter-color font-bold text-center">
              Zone 1
            </h1>
            <img className="h-[150px] w-[200px]" src={illa_2} alt="left"/>
            {/* hospital 20 */}
            <button
              className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
              onClick={onClick}
            >
              <img className="w-12 h-12" src={pin_hospital} alt="hospital"/>
            </button>
          </div>
        </div>
        <ShowInfoModalWindow showModal={showPopup} setShowModal={setShowPopup}/>
      </div>
      <Footer/>

    </div>
  );
}

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <LandingPage/>
      </div>
    );
  }
}

export default MainPage;
