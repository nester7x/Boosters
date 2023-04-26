import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Logo from "assets/Images/covid-icon.png";
import Layout from "./components/Layout";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Covid-19</title>
        <link rel="icon" type="image/png" href={Logo} />
      </Helmet>
      <Layout>{AppRoutes()}</Layout>
    </Router>
  );
}

export default App;
