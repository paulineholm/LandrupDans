import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiHome, FiSearch, FiCalendar } from "react-icons/fi";
import { useLocation } from "react-router-dom";
const NavStyles = styled.nav`
  background-color: var(--light-grey);
  text-align: center;
  padding: 0;
  margin: auto 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  box-shadow: 0px 0px 29px -4px rgba(200, 200, 200, 0.4);
  .iconBorder {
    border: 2px solid black;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    text-align: center;
    display: inline-block;
    margin: 2vh 10vw;
  }
  svg {
    font-size: 2em;
    padding: 3px;
    cursor: grab;
    color: black;
  }
`;
const Nav = () => {
  const location = useLocation();
  return location.pathname === "/" || location.pathname === "/login" ? null : (
    <NavStyles>
      <ul>
        <NavLink to="/activities">
          <span className="iconBorder">
            <FiHome />
          </span>
        </NavLink>
        <NavLink to="/activitysearch">
          <span className="iconBorder">
            <FiSearch />
          </span>
        </NavLink>
        <NavLink to="/calendar">
          <span className="iconBorder">
            <FiCalendar />
          </span>
        </NavLink>
      </ul>
    </NavStyles>
  );
};

export default Nav;
