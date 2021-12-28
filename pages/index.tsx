import Head from "next/head";
import { useMoralis } from "react-moralis";
import Chat from "../components/Chat";
import Login from "../components/Login";

import Sidebar from "../components/Sidebar";

export default function Home() {
  const { auth, isAuthenticated } = useMoralis();

  // if (isLoggingOut) {
  //   return <h1>Bye bye... 👋🏼</h1>;
  // }

  if (!isAuthenticated) return <Login />;
  // bg-gradient-to-b from-purple-300 to-purple-100bg-gradient-to-b from-purple-300 to-purple-100
  // text-slate-100
  return (
    <div className="h-screen pt-10 bg-[url('https://images.unsplash.com/photo-1559251606-c623743a6d76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex w-[90%] md:w-[85%] m-auto">
        <Sidebar />
        <Chat />
      </main>
    </div>

    // <footer></footer>
  );
}
