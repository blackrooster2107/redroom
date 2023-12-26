import Link from "next/link"
import SearchInput from "./SearchInput" 
import UserBtn from "./UserBtn"

const NavBar = ()=>{
    return (
        <header id='navbar' className=" bg-a-accent flex sm:flex-row flex-col gap-2 justify-between p-4 whitespace-nowrap">
            <Link href={`/`} className="font-bold text-3xl text-a-primary"><h1>Redroom</h1></Link>
            <SearchInput />
            <UserBtn />
        </header>
    )
}

export default NavBar