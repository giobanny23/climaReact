import React from 'react';

const Header =(props) =>{
  return(
    <div>
      <nav>
            <div className="nav-warapper light-blue darken">
              <a className="brand-logo">{props.titulo}</a>
            </div>
      </nav >

    </div>
  );
};
export default Header;
