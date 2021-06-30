import Postlist from "./Postlist";
import useFetch from "./useFetch";

const Home = () => {
  const { data, error, isPending } = useFetch(); //"http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <Postlist posts={data} />}
    </div>
  );
};
export default Home;
