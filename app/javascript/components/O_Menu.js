import React from "react"
import PropTypes from "prop-types"
import Logo from "images/logo.svg"
import "stylesheets/O_Menu.scss"


class O_Menu extends React.Component {

  render () {
    return (
      <div className="header">
            <div className="header--left">
              <a href="/posts">
              <img
              className="logo"
              src={Logo}/>
              </a>
          </div>
      </div>
    );
  }
}

export default O_Menu
