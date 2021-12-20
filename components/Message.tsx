import { useMoralis } from "react-moralis";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isCurrentUserMessage =
    message.get("ethAddress") === user.get("ethAddress");

  return (
    <div className="space-y-10 p-3">
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isCurrentUserMessage
            ? " bg-purple-300 justify-end rounded-br-none"
            : "bg-rose-200 justify-start rounded-bl-none"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <span>{message.get("username")}</span>
      {/* Timestamp */}
    </div>
  );
};

export default Message;
