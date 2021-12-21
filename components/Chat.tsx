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
    <div className="mx-5">
      <div className="h-[80vh] overflow-scroll mx-3">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {/* <div
          ref={lastMessageRef}
          className="pb-10"
        >{`You're up to date ${user.get("username")} 🎉`}</div> */}
        <div ref={lastMessageRef} className="pb-10" />
      </div>

      {/* <div> */}
      <SendButton lastMessageRef={lastMessageRef} />
      {/* </div> */}
    </div>
    // <div className="px-10 w-screen">
    //   <div className="h-[80vh] overflow-scroll">
    //     {data.map((message) => (
    //       <Message key={message.id} message={message} />
    //     ))}
    //   </div>

    //   <div
    //     ref={lastMessageRef}
    //     style={{ position: "fixed", bottom: "1.5rem", width: "66%" }}
    //   >
    //     <SendButton lastMessageRef={lastMessageRef} />
    //   </div>
    // </div>
  );
};

export default Chat;
