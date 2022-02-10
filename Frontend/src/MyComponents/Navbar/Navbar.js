import React, { useState, Fragment } from "react";
import classes from "./Navbar.module.css";
import { Link, Route, useHistory } from "react-router-dom";
import login from "./assests/login.jpg";
import search from "./assests/search.png";
import cart from "./assests/cart.png";
import wishlist from "./assests/wishlist.jpg";
import logo from "./assests/logo.png";
import ResList from "./ResList";
import LoginSignup from "../UserAuth/LoginSignup";

const Navbar = () => {
  const [opener, setopener] = useState(false);
  const [searchopener, setsearchopener] = useState(false);
  const [searchItem, setsearchItem] = useState("");
  const listopener = () => {
    setopener(true);
  };
  const onsearch = () => {
    setsearchopener(true);
  };
  const ListCloseHandler = () => {
    setopener(null);
  };
  const searchhandler = (e) => {
    setsearchItem(e.target.value);
  };
  const searchSubmissionHandler = (e) => {
    e.preventDefault();
    if (searchItem === "") {
      return;
    }
    const searchedItem = searchItem;
    console.log(searchedItem);
    setsearchItem("");
  };
 
  const inputsearch = (
    <input
      type="search"
      onChange={searchhandler}
      value={searchItem}
      placeholder="Search products"
      id={classes.search}
    />
  );
  const responsiveImg = (
    <img onClick={onsearch} src={search} className={classes.searchres} alt="" />
  );

  const topLeftNav = (
    <div className={classes.topLeftNav}>
      <div className={classes.services}>
        <ul className={classes.ulA}>
          <li>Feedback</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );

  const topMiddleNav = (
    <div className={classes.containerB}>
      <div className={classes.toggle}>
        <img
          className={classes.option}
          onClick={listopener}
          src="https://cdn-icons-png.flaticon.com/512/59/59660.png"
          alt=""
        />
      </div>
      <div className={classes.logo}>
        <Link to='/'>
        <img className={classes.logo} src={logo} alt="" />
        </Link>
      </div>
    </div>
  );

  const responsiveSearch = (
    <div className={classes.responsiveSearch}>
      {searchopener && (
        <form className={classes.responsiveInput} onSubmit={searchSubmissionHandler}>{inputsearch}</form>
      )}
    </div>
  );

  const topRightNav = (
    <div className={classes.containerC}>
      <div className={classes.useruses}>
        <ul className={classes.ulB}>
          <li>{responsiveImg}</li>
          <li>
            <Link to="/loginSignUp">
              <img className={classes.login} src={login} alt="Logo" />
            </Link>
            <Link to="/loginSignUp" style={{ textDecoration: "none" }}>
              <p className={classes.tag}>Login</p>
            </Link>
          </li>
          <li>
            {" "}
            <img className={classes.cart} src={cart} alt="cart" />
            <p className={classes.tag}>Cart</p>
          </li>
          <li>
            <img className={classes.wishlist} src={wishlist} alt="wishlist" />
            <p className={classes.tag}>Wishlist</p>
          </li>
        </ul>
      </div>
    </div>
  );

  const category = (
    <div className={classes.category}>
    < ul className = { classes.ulC }>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Baby</li>
        <li>Sale</li>
      </ul>
    </div>
  );

  const searchBar = (
    <div className={classes.searchbar}>
      <form onSubmit={searchSubmissionHandler}>
        <label htmlFor="searchItem">
          <img src={search} className={classes.search} alt="" />
        </label>
        {inputsearch}
      </form>
    </div>
  );

  return (
    <Fragment>
      <Route exact path="/loginSignUp">
          <LoginSignup/>
         </Route>

      {opener && <ResList onClose={ListCloseHandler} />}
      <nav>
        <div className={classes.navtop}>
          {topLeftNav}
          {topMiddleNav}
          {responsiveSearch}

          {topRightNav}
        </div>
        <div className={classes.buttomNav}>
          {category}
          {searchBar}
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
