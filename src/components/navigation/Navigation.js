import React, { useState } from "react";
import "./Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";


const Navigation = () => {
  const navItems = ["Nav 1", "Nav 2", "Nav 3", "Nav 4", "Nav 5", "Nav 6"];

    const slide = () => {
      const element = document.getElementById("slider");
      element.classList.toggle("active");
    };

  return (
    <div className="header" id="slider">
       <div className="ham" onClick={slide}>
        <GiHamburgerMenu />
      </div>
      <ul className="navi">
        {navItems.map((item) => {
          return (
            <li key={item} onClick={slide}>
              <a href="#">{item}</a>
              <ul onClick={slide}>
                <li onClick={slide}>
                  <a href="#">SubNav 1</a>
                </li>
                <li onClick={slide}>
                  <a href="#">SubNav 2</a>
                </li>
                <li onClick={slide}>
                  <a href="#">SubNav 3</a>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
