import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteApp from "router/index";
import GlobalStyles from "assets/styles/GlobalStyles";
import Navbar from 'components/Navbar'

const App = () => {
  return (
    <Suspense fallback={<h2>Loading!!</h2>}>
    <GlobalStyles/>
    <Navbar/>
      <Router>
        <RouteApp />
      </Router>
    </Suspense>
  );
};

export default App;
