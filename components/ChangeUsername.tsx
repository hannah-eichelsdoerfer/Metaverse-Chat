import { useState } from "react";
import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const [showModal, setShowModal] = useState(false);
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = (e) => {
    e.preventDefault();
    const username = prompt(
      `Ènter your new Username (current: ${user.getUsername()})`
    );
    if (!username) return;
    setUserData({ username }); // shorthand for username: username
  };

  return (
    <form className="text-sm ">
      <button disabled={isUserUpdating} onClick={setUsername}>
        Change your Username
      </button>
    </form>
  );
};

export default ChangeUsername;
