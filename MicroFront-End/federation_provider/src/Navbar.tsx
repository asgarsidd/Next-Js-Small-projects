import React from "react";
import './App.css'
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
     <div className="sider">
     <p>this is from another project</p>
     </div>
    </nav>
  );
}
