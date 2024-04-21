import "./App.css";
import TwitterCard from "./components/TwitterCard";

const users = [
  {
    name: "Midu Dev",
    userName: "midudev",
    initIsFollowing: true,
  },
  {
    name: "Pablo Albarez",
    userName: "pheranb",
    initIsFollowing: false,
  },
  {
    name: "Paco Hdezs",
    userName: "PacoHdezs",
    initIsFollowing: false,
  },
];
function App() {
  return (
    <div className="container grid grid-cols-2 gap-2 m-2">
      {users.map((user) => (
        <TwitterCard
          key={user.userName}
          name={user.name}
          userName={user.userName}
          initIsFollowing={user.initIsFollowing}
        />
      ))}
    </div>
  );
}

export default App;
