import { useState } from "react";
import topicService from "../services/topicService";
import { useUser } from "../components/UserContext";
import Redirect from "../components/Redirect";

const CreateNewUserPage = () => {
    const [createdTopic, setCreatedTopic] = useState(null);
    const { userId, username } = useUser();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestDTO = { userId, title, content };
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
                    <p>user: {createdTopic.username} </p>
                    <p>title: {createdTopic.title}</p>
                    <p>content: {createdTopic.content}</p>
                    
                    <Redirect where={"/home"} message={"to home"} />
                </div>
            )}
        </>
    )
}

export default CreateNewUserPage;