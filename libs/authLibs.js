import { getServerSession } from "next-auth"
import  {authOpt} from "@/app/api/auth/[...nextauth]/route"

const authUserSession = async () => {
    const session = await getServerSession(authOpt)
    // console.log(session)
    return session?.user
}

export default authUserSession