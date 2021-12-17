import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="relative text-white flex h-screen justify-center">
      <div className="flex flex-col absolute z-50 h-1/2 w-2/6 items-center justify-center space-y-4 custom">
        <button
          onClick={authenticate}
          className="bg-zinc-100 rounded-lg p-2 font-bold animate-pulse text-slate-500"
        >
          Login to the Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://images.unsplash.com/photo-1559251606-c623743a6d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;

// VanillaTilt.init(document.querySelectorAll(".custom"), {
//   max: 25,
//   speed: 400,
//   easing: "cubic-bezier(.05,.80,.60,.99)",
//   perspective: 500,
//   transition: true,
// });
