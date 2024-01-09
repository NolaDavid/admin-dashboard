
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import NextAuth, {getServerSession} from 'next-auth'


const acceptedEmail = ['dguillory62888@gmail.com']
export const authOptions = {
    secret: process.env.GOOGLE_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
  ],
  callbacks: {
    session: ({session,token,user}) => {
        if(acceptedEmail.includes(session?.user?.email)){
            return session
        }return false
    }
  }
}
 
  export default NextAuth(authOptions);
export async function isAdminRequest(req,res){
    const session = await getServerSession(req,res,authOptions)
    
    if (!acceptedEmail.includes(session?.user?.email)) {
        res.status(401);
        res.end();
        throw 'not an admin';
      }

}
