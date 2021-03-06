import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
// import logo from "../images/footer-logo.png"
import logo from "../images/logo.svg"
import "../css/header.css"

function Header() {
  const [color, setColor] = useState("white")

  const listenScrollEvent = e => {
    console.log("listenScrollEvent")
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
        document.getElementById("header").style.background = "rgb(240, 240, 240)"
        // document.getElementById("header").style.background = "white"
    } else {
      document.getElementById("header").style.background = "white"
    }
  }

  useEffect(() => {
    console.log("useeffect")
    window.addEventListener("scroll", listenScrollEvent)
  })

  const openNav = () => {
    console.log("open")
    document.getElementById("myNav").style.height = "100%"
  }

  const closeNav = () => {
    document.getElementById("myNav").style.height = "0%"
  }

  return (
    <div
      id="header"
      className="header-container"
      style={{ backgroundColor: color, zIndex:100 }}
    >
      <div class="lg:p-8">
        <Link to={"/"}>
          <img src={logo} className="w-3/6" alt="header logo" />
        </Link>
      </div>
      <div className="nav-container is-visible@m">

        {/* <p href="#" className="nav-menu slide-center-out"><Link to={"/about/"}>About </Link></p> */}
        <p href="#" className="nav-menu slide-center-out">
          <Link to={"/blog/"}>Documentation </Link>
        </p>
        
        <p href="#" className="nav-menu slide-center-out">
          <Link to={"/blog/"}>Stars </Link>
        </p>
        

        {/* <p href="#" className="nav-menu slide-center-out"><Link to={"/careers/"}>Careers </Link></p> */}
        {/* <p href="#" className="nav-menu slide-center-out"><Link to={"/expertise/"}>Expertise</Link></p> */}
        {/* <a href="#" className="nav-menu">Careers</a> */}
        <Link to={"/ContactPage/"}>
          <p href="#" className="nav-menu nav-button">
            GitHub
          </p>
        </Link>
      </div>
      <div className="mobile-nav-container is-hidden@m" onClick={openNav}>
        <div
          style={{
            padding: "10px",
            borderRadius: 5,
            backgroundColor: "rgba(45, 55, 57, 0.1)",
          }}
        >
          <div className="mobilemenu"></div>
          <div className="mobilemenu"></div>
          <div className="mobilemenu"></div>
        </div>
      </div>

      <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">

          {/* <p href="#" className="nav-menu"><Link to={"/portfolio/"}>Portfolio</Link></p> */}
          {/* <p href="#" className="nav-menu">
            <Link to={"/about/"}>About </Link>
          </p> */}
          <p href="#" className="nav-menu">
            <Link to={"/blog/"}>Documentation </Link>
          </p>  
          <p href="#" className="nav-menu">
            <Link to={"/blog/"}>Stars </Link>
          </p>
         
          <p href="#" className="nav-menu">
            <Link to={"/ContactPage/"}>GitHub</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
