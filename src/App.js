import FrontPage from "./pages/FrontPage/FrontPage";
import MainPage from "./pages/MainPage/MainPage";
import { useState } from "react";
import "./App.css";

function App() {
  const [switchPage, setSwitchPage] = useState(true);

  const switchPages = () => {
    setSwitchPage(false);
  };

  return (
    <div>
      {!switchPage ? <MainPage /> : <FrontPage switchPages={switchPages} />}
    </div>
  );
}

export default App;
