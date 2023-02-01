import React, { useState } from "react";
import "./App.css";
import BackLogTaskList from "./containers/Tasklist";
import Navbar from "./components/navigation/Navbar";
import ProgressTaskList from "./containers/ProgressTaskList";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-items-center flex-justify-center application__container">
        <div className="application__content">
          <BackLogTaskList/>
          <ProgressTaskList/>
        </div>
      </div>
    </div>
  );
};

export default App;
