import prisma from '@/libs/prisma'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {

  const topics = await prisma.Topic.findMany()
  console.log("🚀 ~ file: page.jsx:7 ~ Home ~ topics:", topics)

  return (
    <main>
      <div className='font-bold'>Topics</div>
      <div className='flex gap-2'>
        {topics.map((topic, i) => {
          return (
            <div key={`topic${i}`}>
              <Link href={`/topic/${topic.name}`} >{topic.name}</Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}
