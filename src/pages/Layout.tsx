import React from "react";
import { Header, SectionHeader } from "../components";
import { Outlet } from "react-router-dom";
import Feedback from "../components/Modal/Feedback";

const Layout: React.FC = () => {
  return (
    <>
      <Feedback />
      <Header />
      <SectionHeader />
      <Outlet />
    </>
  );
};

export default Layout;
