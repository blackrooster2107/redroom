import prisma from "@/libs/prisma"

export async function POST (req) {
    // console.log(req)

    const {name, description, creator, createdAt, } = await req.json()

    const data = {name,description, creator, createdAt} 

    const topic = await prisma.Topic.create({
        data: data
    })

    console.log(topic)

    return Response.json(topic)

} 