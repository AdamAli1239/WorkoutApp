import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-around">
      <Link
        to="/"
        className="font-bold  mr-auto p-8 text-amber-800 hover:text-yellow-500 font-serif text-xl"
      >
        Workouts Project
      </Link>

      <Link
        to="/createworkout"
        className="font-bold p-8 text-amber-800 hover:text-yellow-500 font-serif text-xl"
      >
        Create Post
      </Link>
    </nav>
  );
};

export default NavBar;
