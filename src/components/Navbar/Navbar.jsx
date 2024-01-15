import React from 'react'
import "./Navbar.css"

const loaderAnimation=() => {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 5200)
}

const Navbar = () => {
  return (
    <section className="nav-section cream-color">
      <div id="loader" onMouseOver={loaderAnimation}>
        <h1>HOW</h1>
        <h1>ARE</h1>
        <h1>YOU</h1>
        <h1>DEAR ?</h1>
    </div>
        <img src="./logo.png" alt="" />
        <div className="nav-class">
            <a href="#hero-section">HOME</a>
            <a href="#about-section">ABOUT</a>
            <a href="#work-section">CATEGORIES</a>
            <a href="#stats-section">ANALYTICS</a>
        </div>
        <button className='btn yellow-color'>CONTACT US</button>
    </section>
  )
}

export default Navbar
