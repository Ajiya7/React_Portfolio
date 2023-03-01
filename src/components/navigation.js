import React from "react";
import Avatar from '../assets/images/AVATAR.png';

function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact"];
  return (
    <div class="header_content">
      <div class="header_avatar_and_name">
        <div class="header_avatar">
          <img
            src={Avatar}
            alt="Faruk_Ajiya_Avatar"
            class="header_avatar_img"
          />
        </div>
        <p class="name">Faruk Ajiya</p>
      </div>
      <div class="header_menu">
        <nav>
          <ul className="header_links">
            {tabs.map((tab) => (
              <li className="header_link_w" key={tab}>
                <a
                  href={"#" + tab.toLowerCase()}
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? "nav-link active" : "nav-link"
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
