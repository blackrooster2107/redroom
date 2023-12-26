import authUserSession from "@/libs/authLibs"
import prisma from "@/libs/prisma"

export async function POST (req) {

    const {title, topic, content} = await req.json()

    const user = await authUserSession()
    const prismaUser = await prisma.User.findFirst({
        where: {
            email: user.email
        }
    })
    
    const data = {
        title,
        author: user.name,
        topic,
        createdAt: new Date(),
        content
    }
    
    if(prismaUser){
        
        const post = await prisma.Post.create({
            data: data
        })

        console.log(post)
        return Response.json(post)

    }else{
        const post = await prisma.User.create({
            data: {
                name: user.name,
                email: user.email,
                posts: {
                    create: {
                        title,
                        topic,
                        createdAt: new Date(),
                        content
                    }
                }
            }
        })
    }
}