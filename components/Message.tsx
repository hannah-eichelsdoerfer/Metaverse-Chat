import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isCurrentUserMessage =
    message.get("ethAddress") === user.get("ethAddress");

  return (
    <>
      <div className={`flex ${isCurrentUserMessage && "justify-end"}`}>
        <TimeAgo
          datetime={message.createdAt}
          className={`text-[10px] italic text-zinc-800 self-end ${
            isCurrentUserMessage ? "pr-2" : "order-last pl-2"
          }`}
        />
        <p
          className={`message px-4 py-1 ${
            isCurrentUserMessage ? "rounded-br-none" : "rounded-bl-none"
          }`}
        >
          {message.get("message")}
        </p>
      </div>
      <div
        className={`mb-5 text-[12px] ${
          isCurrentUserMessage ? "text-right pr-3" : "pl-3"
        }`}
      >
        <span>{message.get("username")}</span>
      </div>
    </>
  );
};

export default Message;
