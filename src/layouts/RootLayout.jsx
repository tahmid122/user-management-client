import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
