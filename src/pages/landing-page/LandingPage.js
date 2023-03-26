import React from "react";

import Dashobardlayout from "../layout/DashboardLayout";
import "./landingpage.css";
import MenuCards from "../menu-cards/MenuCards";

export const LandingPage = () => {
  return (
    <div>
      <Dashobardlayout>
        <MenuCards />
      </Dashobardlayout>
    </div>
  );
};
