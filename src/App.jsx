import "./App.css";
import TwitterCard from "./components/TwitterCard";

function App() {
  return (
    <div className="container grid grid-cols-2 gap-2 m-2">
      <TwitterCard isFollowing name="Midu Dev" userName="midudev" />
      <TwitterCard isFollowing name="Pablo albarez" userName="pheralb" />
      <TwitterCard isFollowing name="Pablo albarez" userName="pheralb" />
      <TwitterCard name="Pablo albarez" userName="pheralb" />
    </div>
  );
}

export default App;
