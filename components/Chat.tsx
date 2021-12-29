import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendButton from "./SendButton";

// Only show last 15 minutes of messages
const MINS_DURATION = 15;

const Chat = () => {
  const { user } = useMoralis();
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
    <div className="basis-3/4" id="chat">
      <div className="h-[45vh] lg:h-[70vh] overflow-scroll px-3 lg:px-10 flex flex-col">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={lastMessageRef} />
      </div>

      <SendButton lastMessageRef={lastMessageRef} />
    </div>
  );
};

export default Chat;
