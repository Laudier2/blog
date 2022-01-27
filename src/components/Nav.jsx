import React from 'react';
import './style.css';

const Nav = () => {

  const nova = "_blank"

  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            <img src="https://becode.com.br/wp-content/uploads/2016/10/Por-que-usar-JavaScript.gif" alt="gif" className="icoN border border-dark bard" /> 
          </a>
        </li>
        <li className="nav-item bard">
          <a className="nav-link text-light" target={nova} href="https://developer-js.netlify.app/">Portifolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" target={nova} href="https://github.com/Laudier2?tab=repositories">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" target={nova} href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g">Youtube</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" target={nova} href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/">Linkedin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" target={nova} href="/downloads">Download</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;