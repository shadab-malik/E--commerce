import "./App.css";
import Navbar from "./MyComponents/Navbar/Navbar";
import Home from "./MyComponents/home/Home";
import Footer from "./MyComponents/Footer/Footer";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import React from "react";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route  path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
