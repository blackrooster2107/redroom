"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"


const BackBtn = ()=>{

    const router = useRouter()
    const handleBack = ()=>{
        router.back()
    }
    return (
        <button onClick={handleBack} className="text-a-primary hover:bg-a-accent rounded-md transition-colors">
            <ArrowSquareLeft size={50}/>
        </button>
    )
}

export default BackBtn