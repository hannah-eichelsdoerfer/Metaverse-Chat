import { MouseEvent, useRef, useState } from "react";
import { ReactMoralisError, useMoralis } from "react-moralis";

const SendButton = ({ lastMessageRef }) => {
  const { Moralis, user } = useMoralis();
  const [message, setMessage] = useState("");
  const messageRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    // offchain storing (not on the blockchain due to high gas fees)
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.get("username"),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // object was saved successfully
          // console.log(message);
        },
        (error: ReactMoralisError) => {
          // save failed, error is a Moralis.Error with an error code and message
          console.log(error.message);
        }
      );
    lastMessageRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a Message"
        value={message}
        ref={messageRef}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={sendMessage}>
        Send Message
      </button>
    </form>
  );
};

export default SendButton;
