import { useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <title>Facebook</title>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        {/* Widgets  */}
      </main>
    </div>
  );
}

//* With the useSession hook you dont need this below

// export async function getServerSideProps(context) {
// Get the user
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// }
