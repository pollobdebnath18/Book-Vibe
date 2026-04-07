import React from "react";
import NavBar from "../components/Shared/NavBar/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>j
    </div>
  );
};

export default MainLayout;
