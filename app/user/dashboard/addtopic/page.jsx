import authUserSession from "@/libs/authLibs"
import Topicform from "./Topicform"


export default async function Page() {
    const user = await authUserSession()

    return(
        <div>
            <Topicform username={user.name}/>
        </div>
    )
}