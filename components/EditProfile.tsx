import { useState } from "react";
import { useMoralis } from "react-moralis";

const EditProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = (e) => {
    e.preventDefault();
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );
    const gender = prompt("Avatar gender:");
    if (!username) return;
    setUserData({ username, gender }); // shorthand for username: username
  };

  return (
    // <form className="text-sm ">
    <button disabled={isUserUpdating} onClick={setUsername}>
      Change your Username
    </button>
    // </form>
  );
};

export default EditProfile;
