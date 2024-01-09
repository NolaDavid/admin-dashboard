import Layout from "../components/Layout";
import Card from "../components/Card"
export default function orders(){
    return (
        <Layout>

<h1 className={`mb-4 text-xl md:text-2xl`}>
        Orders
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <table class="table-fixed">
  <thead>
    <tr>
      <th>Date</th>
      <th>Email</th>
      <th>Items</th>
      <th>Status</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
  <td title="Collected" value={44} type="collected" ></td>
        <td title="Pending" value={44} type="pending" ></td>
        <td title="Total Invoices" value={3} type="invoices"></td>
  </tbody>
</table>
   
       
      </div>
        </Layout>
    )
}