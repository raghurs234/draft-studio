import React, { FC } from 'react';


interface ComponentsHeaderProps {}

const Header: FC<ComponentsHeaderProps> = () => (
  
  <div className="header_section">
  <div className="">
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="logo" href="index.html"><img src="images/logo.png" alt='logo' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                 <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="services.html">Services</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="projects.html">Projects</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
           </ul>
           
        </div>
     </nav>
  </div>
</div>
);

export default Header;
