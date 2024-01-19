import RevealHeading from "./RevealHeading";
import Team from "./Team";
import LeftMiddleRightLayout from "./LeftMiddleRightLayout";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <section className="first">
        <div className="first-container">
          <div className="flex-h1">
            <RevealHeading />
          </div>
        </div>
      </section>
      <div>
        <Team />
      </div>
      <div>
        <LeftMiddleRightLayout />
      </div>
    </>
  );
}
export default App;
