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

  return (
    <main className="h-screen pt-10 text-stone-700 overflow-y-scroll bg-gradient-to-b from-purple-300 to-purple-100 overlow-hidden">
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:flex w-5/6 m-auto ">
        <Sidebar />
        <Chat />
      </div>
    </main>

    // <footer></footer>
  );
}
