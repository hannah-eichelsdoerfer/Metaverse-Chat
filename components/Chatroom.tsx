import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendButton from "./SendButton";

// Only show last 15 minutes of messages
const MINS_DURATION = 15;

const Chatroom = () => {
  const {} = useMoralis();
  const lastMessageRef = useRef(null);
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true, // realtime listener
    }
  );

  return (
    <div className="px-10 w-screen">
      <div className="h-[80vh] overflow-scroll">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div
        ref={lastMessageRef}
        style={{ position: "fixed", bottom: "1.5rem", width: "66%" }}
      >
        <SendButton lastMessageRef={lastMessageRef} />
      </div>
    </div>
  );
};

export default Chatroom;
