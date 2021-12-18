import { useMoralis } from "react-moralis";

const Message = ({ message }) => {
  const { user } = useMoralis();
  return (
    <div className="space-y-10 p-3">
      <p>{message.get("message")}</p>
    </div>
  );
};

export default Message;
