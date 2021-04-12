import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteApp from "router/index";
import GlobalStyles from "assets/styles/GlobalStyles";

const App = () => {
  return (
    <Suspense fallback={<h2>Loading!!</h2>}>
    <GlobalStyles/>
      <Router>
        <RouteApp />
      </Router>
    </Suspense>
  );
};

export default App;
