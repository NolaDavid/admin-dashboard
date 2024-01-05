import Layout from "../components/Layout";
import Card from "../components/Card"
export default function orders(){
    return (
        <Layout>

<h1 className={`mb-4 text-xl md:text-2xl`}>
        Orders
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={44} type="collected" />
        <Card title="Pending" value={44} type="pending" />
        <Card title="Total Invoices" value={3} type="invoices" />
       
      </div>
        </Layout>
    )
}