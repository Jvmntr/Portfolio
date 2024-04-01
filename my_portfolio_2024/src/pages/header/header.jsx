import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav className="header_content">
      <div className="header_left">
        <h2>
          Jvmntr.
          <span className="header_name_color">dev</span>{" "}
        </h2>
      </div>
      <div className="header_right">
        <ul className="header_links">
          <li>
            <a className="header_link_decoration" href="">
              Sobre Mim
            </a>
          </li>
          <li>
            <a className="header_link_decoration" href="">
              Projetos
            </a>
          </li>
          <li>
            <a className="header_link_decoration" href="">
              Certificados
            </a>
          </li>
          <li>
            <a className="header_link_decoration" href="">
              Carreira Academica
            </a>
          </li>
          <li>
            <a className="header_link_decoration" href="">
              Carreira Profissional
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
