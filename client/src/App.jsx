import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./Hooks/GlobalContext";

const App = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastResult, setToastResult] = useState();
  const [toastMessage, setToastMessage] = useState();

  return (
    <div className="container-fluid">
      <GlobalContext.Provider
        value={{
          toastVisible,
          setToastVisible,
          toastResult,
          setToastResult,
          toastMessage,
          setToastMessage,
        }}
      >
        <Header />
        <Sidebar />
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
