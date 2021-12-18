import { useMoralis } from "react-moralis";

const Sidebar = () => {
  const { user } = useMoralis();
  return (
    <div>
      <h1>{"I'm the Sidebar"}</h1>
      <div>Avatar</div>
      <div>Welcome Message</div>
      <p>Username</p>
      <p>Edit UserName</p>
    </div>
  );
};

export default Sidebar;
