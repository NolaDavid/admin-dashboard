import { useSession,} from "next-auth/react"
import Layout from '../components/Layout'

export default function Home() {
  const { data: session } = useSession()
  console.log("session",session)
return(
      <Layout >
        <div>
      Signed in as{session?.user?.name}  <br/>

        </div>
      
    </Layout>
)
  }
  
