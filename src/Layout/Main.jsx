import React from "react";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="pt-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
