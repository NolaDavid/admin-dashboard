import Card from './Card'

export default function Revenue(){
    const ordersYTD = 3.22;
    const ordersThisWeek = 322.22;
    const ordersThisMonth = 5333;

    return(
        <div>
 <h1>Revenue</h1>
        <div className='orders--container'>
            <Card value={ordersThisWeek} title="This Week"/>
            <Card value={ordersThisMonth} title='This Month'/>
            <Card value={ordersYTD} title="This Year"/>
        </div>
        </div>
       
    )
}