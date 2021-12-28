import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import EditProfile from "./EditProfile";

const Sidebar = () => {
  const { user, logout } = useMoralis();
  return (
    <div className="text-center md:text-left basis-1/4" id="sidebar">
      <div className="relative h-32 w-32 mx-auto md:mx-0 border-grey-500 border-2 rounded-full">
        <Avatar username={user.get("username")} />
      </div>

      <div>
        <h1 className="text-3xl">Welcome to the Metaverse</h1>
        <h2 className="text-2xl font-bold truncate">
          Your Username: {user.getUsername()}
        </h2>
      </div>
      <EditProfile />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Sidebar;
