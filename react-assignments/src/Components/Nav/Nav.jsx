import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="effects">Effects Component</NavLink>
        </li>
        <li>
          <NavLink to="/state">State Component</NavLink>
        </li>
        <li>
          <NavLink to="/props">Props Component</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;