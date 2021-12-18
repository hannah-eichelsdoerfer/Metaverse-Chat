import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";

import Sidebar from "../components/Sidebar";

export default function Home() {
  const { isAuthenticated, logout, isLoggingOut, account, chainId, user } =
    useMoralis();

  if (!isAuthenticated) return <Login />;
  console.log(user);

  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-red-300 to-red-600 overlow-hidden">
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Sidebar with Account Info */}
      <div className="m-auto w-2/3">
        <Sidebar />
        <h1>Hello World</h1>
        <p>Your Account Number: {account}</p>
        <button onClick={logout}>Logout</button>
      </div>
      {/* Chat */}
    </main>

    // <footer></footer>
  );
}
