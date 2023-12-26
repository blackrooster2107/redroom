import authUserSession from "@/libs/authLibs";
import { User } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default async function UserBtn() {

    const user = await authUserSession()
    const url = user ? '/api/auth/signout' : '/api/auth/signin'
    const lbl = user ? 'Sign out' : 'Sign in'
    // console.log(user)

    return (

        <div className="flex flex-row gap-2 justify-end items-center">

            {
                user ?
                    <Link href={'/user/dashboard'} className="w-8">
                        <Image
                            src={user.image}
                            alt={user.name}
                            width={50}
                            height={50}
                            priority={false}
                            className="object-cover w-8 h-8 rounded-full border-2 border-a-secondary min-w-fit"
                        />
                    </Link>
                    :
                    <div className=" flex items-center justify-center w-8 h-8 rounded-full border-2 border-a-secondary min-w-fit">
                        <User size={24} />
                    </div>
            }

            <Link href={url} className="rounded-md py-1 px-2 bg-a-secondary text-a-primary whitespace-nowrap">
                {lbl}
            </Link>

        </div>

    )
}