import Card from './Card'

export default function Orders(){
    const ordersToday = 2;
    const ordersThisWeek = 3;
    const ordersThisMonth = 5;

    return(
        <div>
 <h1>Orders</h1>
        <div className='orders--container'>
            <Card value={ordersToday} title="Today"/>
            <Card value={ordersThisWeek} title="This Week"/>
            <Card value={ordersThisMonth} title='This Month'/>
        </div>
        </div>
       
    )
}