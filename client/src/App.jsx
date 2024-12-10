import { useState } from "react";
import Header from "./components/Header";
import GlobalContext from "./Hooks/GlobalContext";
import Sidebar from "./components/SidebarComp/Sidebar";

const App = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastResult, setToastResult] = useState();
  const [toastMessage, setToastMessage] = useState();
  const [showPage, setShowPage] = useState(1);
  const [fullSidebar, setFullSidebar] = useState(true);

  const [user, setUser] = useState({ name: "שאדי מצארוה" });
  const [office, setOffice] = useState({ name: "משרד שאדי מצארוה ושותפיו" });

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
          showPage,
          setShowPage,
          fullSidebar,
          setFullSidebar,
          user,
          office,
        }}
      >
        <Header />
        <Sidebar />
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
