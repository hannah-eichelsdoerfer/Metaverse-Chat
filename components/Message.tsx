import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isCurrentUserMessage =
    message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`space-y-10 p-3 flex ${isCurrentUserMessage && "justify-end"}`}
    >
      <div
        className={`space-x-4 p-3 rounded-lg ${
          isCurrentUserMessage
            ? " bg-purple-300 justify-end rounded-br-none"
            : "bg-rose-200 justify-start rounded-bl-none"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>

      <div>
        <p>{message.get("username")}</p>
        {/* Timestamp */}
        <TimeAgo
          datetime={message.createdAt}
          className={`text-[10px] italic text-gray-400 pl-2`}
        />
      </div>
    </div>
  );
};

export default Message;
