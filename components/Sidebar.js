import Link from "next/link";
import { signOut } from "next-auth/react";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar--title mb-5 ml-2" >
        <h1 className="text-grey">Five0Forge</h1>
      </div>
      <nav className="flex flex-col gap-10 ml-4  ">
        <Link className="flex flex-col gap-2 ml-4 " href={"/"}>Dashboard</Link>
        <Link className="flex flex-col gap-2 ml-4 " href={"/products"}>Products</Link>
        <Link className="flex flex-col gap-2 ml-4 " href={"/categories"}>Categories</Link>
        <Link className="flex flex-col gap-2 ml-4 " href={"/orders"}>Orders</Link>
        <Link className="flex flex-col gap-2 ml-4 "  href={"/settings"}>Settings</Link>
        <div className="sidebar--logout">

        <button className="sidebar--lob bg-orange-950  text-white font-bold py-2 px-4 rounded-full" onClick={() => signOut()}>Logout</button>
        </div>
      </nav>
    </aside>
  );
}
