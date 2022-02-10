import React from "react";
import classes from'./ResList.module.css';
import Modal from "../UI/Modal";

const ResList = (props) => {
    
    return (
      <Modal onClose={props.onClose} setClass={classes.modal}>
        <div className={classes.header}>
          <h1>My Account/ Login</h1>
        </div>
        <div className={classes.category}>
          <ul className={classes.rescategory}>
            <li className={classes.list}>Men</li>
            <li className={classes.list}>Women</li>
            <li className={classes.list}>Kids</li>
            <li className={classes.list}>Baby</li>
            <li className={classes.list}>Sale</li>
          </ul>
        </div>
        <div className={classes.resservices}>
          <ul className={classes.rescontact}>
            <li className={classes.list}>Feedback</li>
            <li className={classes.list}>About Us</li>
            <li className={classes.list}>Contact Us</li>
          </ul>
        </div>
      </Modal>
    );
}

export default ResList;

