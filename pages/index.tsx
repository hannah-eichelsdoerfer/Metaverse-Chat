import Head from "next/head";
import { useMoralis } from "react-moralis";
import Chatroom from "../components/Chatroom";
import Login from "../components/Login";

import Sidebar from "../components/Sidebar";

export default function Home() {
  const { isAuthenticated, logout, isLoggingOut, account, chainId, user } =
    useMoralis();

  if (!isAuthenticated) return <Login />;
  console.log(user);

  return (
    <main className="h-screen text-stone-700 overflow-y-scroll bg-gradient-to-b from-purple-300 to-purple-100 overlow-hidden">
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Sidebar with Account Info */}
      <div className="md:flex w-5/6 m-auto ">
        <Sidebar />
        <Chatroom />
      </div>
      {/* Chat */}
    </main>

    // <footer></footer>
  );
}
