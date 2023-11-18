// import { slide as Menu } from "react-burger-menu";
import Menu from "react-burger-menu/lib/menus/slide";
import "./reactNav.css";

const ReactNav = () => {
  return (
    <Menu
      scaleDown
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
    >
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default ReactNav;
