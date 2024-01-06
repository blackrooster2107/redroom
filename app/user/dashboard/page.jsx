import authUserSession from "@/libs/authLibs"
import Image from "next/image"
import Link from "next/link"
import { capzfirstletters } from "@/libs/libs"
import BackBtn from "@/components/Utilities/BackBtn"

export default async function Page() {

    const user = await authUserSession()

    return (
        <>
            <div className="text-a-primary flex flex-col justify-center items-center py-4 gap-2">
                <div className="w-full flex px-4">
                <BackBtn/>
                </div>
                <h3 className="text-2xl">{capzfirstletters(user.name)}</h3>
                <Image
                    src={user.image}
                    width={500}
                    height={500}
                    priority={false}
                    alt={user.name}
                    className="w-20 h-20 rounded-full" />
                <p>e-mail: {user.email}</p>
                <div className="flex flex-wrap flex-row gap-3 text-a-dark ">
                    <Link href={'/user/dashboard/addpost'} className="hover:bg-a-accent hover:text-a-primary px-3 border-solid border-2 border-a-dark cursor-pointer transition-all">Add Post</Link>
                    <Link href={'/user/dashboard/addtopic'} className="hover:bg-a-accent px-3 border-solid border-2 hover:text-a-primary border-a-dark cursor-pointer transition-all">Add Topic</Link>
                </div>
                <div className="flex flex-wrap flex-row gap-3 text-a-dark ">
                    <Link href={'/user/posts'} className="hover:bg-a-accent px-3 border-solid border-2 border-a-dark cursor-pointer transition-all hover:text-a-primary">My Posts</Link>
                    <Link href={'/user/comments'} className="hover:bg-a-accent px-3 border-solid border-a-dark border-2 cursor-pointer transition-all hover:text-a-primary">My Comments</Link>
                </div>
            </div>
        </>
    )
}