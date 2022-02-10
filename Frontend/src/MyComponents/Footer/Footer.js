import React from 'react'
import './Footer.css';
import google from './googleplay.png'

function Footer() {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>Download our App</h4>
          <p>Download App for Android and IOS mobile users</p>
          <img src={google} alt="" />
          <img style={{width:'9vmax'}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
          />
        </div>
        <div className="midFooter">
          <h1>ASH</h1>
          <p>Quality product is our first priority.</p>
          <p>Copyrights 2022 &copy; -ASH-</p>
        </div>
        <div className="rightFooter">
          <h4>Follow us</h4>
          <a href="https://instagram.com/_shadab.malik_">Shadab Malik</a>
          <a href="https://instagram.com/aksh_sony333">Akshitha Donthula</a>
          <a href="https://instagram.com/hshrivastva">Himanshu Shrivastva</a>
        </div>
      </footer>
    );
}

export default Footer
