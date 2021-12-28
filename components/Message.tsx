import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isCurrentUserMessage =
    message.get("ethAddress") === user.get("ethAddress");

  return (
    <>
      <div className={`flex ${isCurrentUserMessage && "justify-end mb-5 "} `}>
        <p
          className={`message p-3 ${
            isCurrentUserMessage ? "rounded-br-none" : "rounded-bl-none"
          }`}
        >
          {message.get("message")}
        </p>
      </div>
      <div className="text-right">
        <TimeAgo
          datetime={message.createdAt}
          className={`text-[10px] italic text-slate-100 pr-2`}
        />
        <span>{message.get("username")}</span>
      </div>
    </>
  );
};

export default Message;
