'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const SearchInput = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        if (!keyword || keyword.trim() == "") {
            return
        }
        router.push(`/search/${keyword}`)
    }

    return (
        <form className="relative text-a-dark">
            <input
                id="search_input"
                aria-label="search_input"
                placeholder="    search anything ..."
                className=" rounded-full p-1 w-full"
                ref={searchRef}
            />
            <button id="search" aria-label="search" className="absolute top-0.5 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </form>
    )
}

export default SearchInput