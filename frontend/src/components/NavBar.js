import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Workouts Project</Link>

      <Link to="/createworkout"> Create Post</Link>
    </nav>
  );
};

export default NavBar;
