import { useSession,} from "next-auth/react"
import Layout from '../components/Layout'
import Orders from '../components/Orders'
// import Revenue from '../components/Revenue'

export default function Home() {
  const { data: session } = useSession()
  console.log("session",session)
return(
      <Layout >
        <div className="dashboard--welcome">
      Hello{session?.user?.name}  <br/>

      <Orders />
        </div>

      
    </Layout>
)
  }
  
