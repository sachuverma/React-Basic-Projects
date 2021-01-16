import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext);
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
