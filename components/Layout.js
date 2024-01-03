import { useSession, signIn,signOut } from "next-auth/react";
import Sidebar from "./Sidebar";


export default function Layout({ children }) {
  const {data:session} = useSession()
  if (!session) {
    return (
      <div>
        <p>Please Sign In With Google To Access the Dashboard</p>
        <button onClick={() => signIn("google")}>Sign in</button>
      </div>
    );
  }else {
    return (
      <div className="flex main">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    );
  }
 
}
