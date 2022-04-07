import React from 'react'
import tools from "../../assets/tools1.png"
import imgmenue from "../../assets/mega1.png"
import logo from "../../assets/Logo.png"
import units from "../../assets/units.png"
import draugs from "../../assets/2.png"
import News from "../../assets/4.png"
import other from "../../assets/denta1.png"
 import mosh from "../../assets/6.png"
import "./Navbar.css"
export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg ">
      <div className="container-fluid">
        <a className="Cnavbar-brand" href="#">
          <img className='w-50 d-sm-w-25'  src={logo} alt=""/>
        </a>
        {/* =====element will visable in mobile screen===== */}
        <input className='form-control  mobilesearch  w-50 d-lg-mx-auto ' placeholder='search' type="text" />
        <div className="iconmobile">
        <a href="" className="btn  rounded-circle bg-white"> <span  className="fa-solid fa-user text-dark"></span> </a>
          <a href="" className="btn mx-2  rounded-circle bg-white"> <span className="fa-solid fa-cart-shopping text-dark"></span> </a>
          </div>
          {/* ----navbar------ */}
        <button className="navbar-toggler btntoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link p-lg-3 active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-lg-3"  href="#">About Us</a>
            </li>
            <li className="nav-item Categories position-relative">
              <a className="nav-link  p-lg-3" href="#">Categories</a>
                {/*----------------------- megamenue ------------------- */}
              <div className="megMenue position-absolute">
                {/*----- megamenue image ------ */}
                <div className="megimag">
                  <img src={imgmenue} alt="" />
                </div>
                {/*----- megamenue links ------ */}
                <div className="megaLinks">
                <ul className="  mb-2 mb-lg-0">
                  <li className="nav-item d-flex  align-items-center">
                    <img  className="imageWidth" src={tools} alt="" />
                    <a className="nav-link p-lg-3  active" aria-current="page" href="#">Tools</a>
                  </li>
                  <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={units} alt="" />
                    <a className="nav-link p-lg-3 active" aria-current="page" href="#">Units</a>
                  </li>
                  <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={draugs} alt="" />
                    <a className="nav-link p-lg-3 active" aria-current="page" href="#">Drugs</a>
                  </li>
                </ul>
                <ul>
                <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={News} alt="" />
                    <a className="nav-link p-lg-3 active" aria-current="page" href="#">News</a>
                  </li>
                  <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={other} alt="" />
                    <a className="nav-link p-lg-3 active" aria-current="page" href="#">other</a>
                  </li>
                  <li className="nav-item d-flex  align-items-center">
                  <img  className="imageWidth" src={mosh} alt="" />
                    <a className="p-lg-3 active text" aria-current="page" href="#"> mosharffen </a>
                  </li>
                </ul>
                </div>
              </div>
             
            </li>
          </ul>
          <div className="search ps-3 pe-3 d-none d-lg-block" id="search"> 
            <div className="icon" id="icon" onClick={()=>{document.getElementById("search").classList.toggle('active')}} ></div>
            <div className="input">
              <input type="text" placeholder="search" id="input-search"/>
              <i className="fa-solid fa-delete-left" id="clear" onClick={()=>document.getElementById('input-search').value = ''}></i>
            </div>
          </div>
          <div className="iconLscreen">
          <a href="" className="btn   rounded-circle bg-white"> <span  className="fa-solid fa-user text-dark"></span> </a>
          <a href="" className="btn mx-2 rounded-circle bg-white"> <span className="fa-solid fa-cart-shopping text-dark"></span> </a>
            
          </div>
        </div>
      </div>
    </nav> 
   
  )
}
