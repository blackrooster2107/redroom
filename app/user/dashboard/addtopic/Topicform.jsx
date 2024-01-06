"use client"

export default function Topicform({ username }) {
    const submit = async (e) => {
        e.preventDefault()
        const name = document.getElementById('name')
        const desc = document.getElementById('desc')
        const data = {
            name: name.value,
            description: desc.value,
            creator: username,
            createdAt: new Date()
        }
        // console.log("🚀 ~ file: Topicform.jsx:12 ~ submit ~ data:", data)
        const submitTopic = await fetch("/api/v1/topic/add",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )

        const res = await submitTopic.json()
        alert(`topic ${data.name} created`)
        name.value = ''
        desc.value = ''

    }

    return (
        <div className="w-full flex justify-center py-2">
            <form action="submit" className="flex flex-col gap-2 px-2">
                <div className="px-2 gap-2">
                    <label >
                        Topic Name : <input id='name' placeholder="topic" className="px-2" autoComplete="text" />
                    </label>
                </div>
                <div className="px-2 gap-2">
                    <label >
                        Topic Description : <input id='desc' placeholder="description" className="px-2" autoComplete="text" />
                    </label>
                </div>
                <button onClick={submit} className="bg-a-secondary text-a-primary rounded-md hover:bg-a-dark">Add Topic</button>
            </form>

        </div>
    )
}