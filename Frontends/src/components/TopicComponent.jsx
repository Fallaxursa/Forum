
export default function TopicComponent ({ topic }) {
    return(
        <div className="w-full max-w-md p-4 bg-white-400 border rounded">
            {/* <h3>{topic.id}</h3> */}
            <h3 className="text-left">{topic.username}</h3>
            <h1 className="text-center">{topic.title}</h1>
            <p className="text-center">{topic.content}</p>
        </div>
    )
}