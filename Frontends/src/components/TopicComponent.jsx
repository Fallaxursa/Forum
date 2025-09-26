
export default function TopicComponent ({ topic }) {
    return(
        <div className="" >
            {/* <h3>{topic.id}</h3> */}
            <h3>{topic.username}</h3>
            <h1>{topic.title}</h1>
            <p>{topic.content}</p>
        </div>
    )
}