import { Link } from "react-router-dom";
const Postlist = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map((p) => (
        <div className="blog-preview" key={p.id}>
          <Link to={`/post/${p.id}`}>
            <h2>{p.title}</h2>
            <p>Autor: {p.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Postlist;
