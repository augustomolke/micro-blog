import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Micro Blog</h1>
      <div className="links">
        <Link to="/micro-blog">Home</Link>
        <Link to="/micro-blog/create">New Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
