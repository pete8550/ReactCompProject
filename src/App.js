import React from "react";
import "./App.css";
import DemoAutoplay from "./component1/DemoAutoplay";
import SpinnerExample from "./component2/MDSpinner";
import DatePicker from "./component3/RangeDatePicker";
import SwatchesExample from "./component4/SwatchesExample";
import PaymentForms from "./component5/PaymentForms";
import YTPlayer from "./component6/YTPlayer";

function App() {
  return (
    <div>
      {/* Præsentation af opgaven og beskrivelse omkring, hvordan den er løst */}
      <div className="App">
        <header className="App-header">
          <h1>
            Opgavebeskrivelse: Byg en dummyside med flere udvalgte react
            components. <br />
            Min Løsning: Jeg har lavet 6 forskellige react components og linket
            til, hvor komponentet er taget fra.
          </h1>
        </header>
      </div>
      <hr></hr>
      <br></br>

      {/* Component 1 */}
      <div>
        <div className="Header-section">
          <p>
            Component 1: react-swipeable-views (HOCS) //{" "}
            <a href="https://github.com/oliviertassinari/react-swipeable-views">
              Source
            </a>{" "}
          </p>
        </div>
        <DemoAutoplay />
      </div>
      <hr></hr>
      <br></br>

      {/* Component 2 */}
      <div>
        <div className="Header-section">
          <p>
            Component 2: react-md-spinner //{" "}
            <a href="https://github.com/wadackel/react-md-spinner">Source</a>{" "}
          </p>
        </div>
        <div align="center">
          <div className="Spinner">
            <h1>Loading...&nbsp;&nbsp;</h1>
          </div>
          <div className="Spinner">
            <SpinnerExample />
          </div>
        </div>
      </div>
      <hr></hr>
      <br></br>

      {/* Component 3 */}
      <div>
        <div className="Header-section">
          <p>
            Component 3: react-google-flight-datepicker //{" "}
            <a href="https://github.com/JSLancerTeam/react-google-flight-datepicker">
              Source
            </a>{" "}
          </p>
        </div>
        <DatePicker />
      </div>
      <hr></hr>
      <br></br>

      {/* Component 4 */}
      <div>
        <div className="Header-section">
          <p>
            Component 4: coloreact //{" "}
            <a href="https://github.com/elrumordelaluz/coloreact">Source</a>{" "}
          </p>
        </div>
        <SwatchesExample />
      </div>
      <hr></hr>
      <br></br>

      {/* Component 5 */}
      <div>
        <div className="Header-section">
          <p>
            Component 5: React Credit Cards //{" "}
            <a href="https://github.com/amarofashion/react-credit-cards">
              Source
            </a>{" "}
          </p>
        </div>
        <PaymentForms />
      </div>
      <hr></hr>
      <br></br>

      {/* Component 6 */}
      <div>
        <div className="Header-section">
          <p>
            Component 6: react-youtube //{" "}
            <a href="https://github.com/tjallingt/react-youtube">Source</a>{" "}
          </p>
        </div>
        <YTPlayer />
      </div>
    </div>
  );
}

export default App;
