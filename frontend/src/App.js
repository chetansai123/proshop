import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import "../src/components/components.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="py-3 text-center">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
