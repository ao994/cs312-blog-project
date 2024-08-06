import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <>
        <footer className="fixed-bottom">
          <p>@ Blog App {year}</p>
        </footer>
      </>
    );
  }
  
  export default Footer;