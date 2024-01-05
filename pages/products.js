import Layout from "../components/Layout";
import Link from "next/link";
export default function products() {
  return (
    <Layout>
        <Link href="/items">
            Add Item
        </Link>

    </Layout>
  );
}
