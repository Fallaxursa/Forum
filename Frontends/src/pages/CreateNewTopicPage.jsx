import { useState } from "react";
import topicService from "../services/topicService";

const CreateNewUserPage = () => {
    const [createdTopic, setCreatedTopic] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestDTO = { title, content };
              console.log('Request DTO being sent:', JSON.stringify(requestDTO, null, 2));
            const topic = await topicService.createTopic(requestDTO);
            setCreatedTopic(topic);
            setTitle('');
            setContent('');
        } catch(err) {
            console.error("Error creating topic: ", err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

                <input type="text"
                placeholder="Enter Content"
                value={content}
                onChange={(e) => setContent(e.target.value)} />

                <button type="submit">CREATE</button>
            </form>
            
            {createdTopic && (
                <div>
                    <p>id: {createdTopic.id}</p>
                    {/* <p>user: {createdTopic.usern} </p> */}
                    <p>title: {createdTopic.title}</p>
                    <p>content: {createdTopic.content}</p>
                </div>
            )}
        </>
    )
}

export default CreateNewUserPage;