import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Sidebar } from "../../components/sidebar/Sidebar";

import Footer from "./Footer";
import { Header } from "./Header";

const Dashobardlayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Container>
        <div className="main">{children}</div>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashobardlayout;
