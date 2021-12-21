import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isCurrentUserMessage =
    message.get("ethAddress") === user.get("ethAddress");

  return (
    <div>
      {message.get("message")}{" "}
      <TimeAgo
        datetime={message.createdAt}
        className={`text-[10px] italic text-gray-400 pr-2`}
      />
      <span>{message.get("username")}</span>
    </div>
    // <div
    //   className={`p-3 flex ${
    //     isCurrentUserMessage && "justify-end"
    //   }  text-right`}
    // >
    //   <div>
    //     <div
    //       className={`p-3 rounded-lg ${
    //         isCurrentUserMessage
    //           ? " bg-slate-300 rounded-br-none"
    //           : "bg-rose-200 rounded-bl-none"
    //       }`}
    //     >
    //       <p>{message.get("message")}</p>
    //     </div>
    //     <div>
    //       <TimeAgo
    //         datetime={message.createdAt}
    //         className={`text-[10px] italic text-gray-400 pr-2`}
    //       />
    //       <span>{message.get("username")}</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Message;
