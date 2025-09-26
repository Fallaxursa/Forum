import { useUser } from "../components/UserContext"
import { useQuery } from "@tanstack/react-query"
import TopicComponent from "../components/TopicComponent"
import topicService from "../services/topicService"
import { useEffect } from "react"
import { useState } from "react"
import Redirect from "../components/Redirect"

export default function HomePage() {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            const fetchTopics = async () => {
            try {
                setLoading(true);
                const response = await topicService.getAllTopics();
                console.log(response.data);
                console.log(response);
                const topicsArray = Array.isArray(response) ? response : response.data;

                console.log("Topics:", topicsArray);
                setTopics(topicsArray);
            } catch (err) {
                setError("failed to fetch topics");
            } finally {
                setLoading(false);
            };
        };

    fetchTopics();
    }, []);
    
    if (loading) return <p>Loading topics...</p>
    if (error) return <p>Error loading topics!</p>

    const sortedTopics = [...topics].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return (
        <div>
            <h1>TOPICS</h1>
            {sortedTopics.map(topic => (
                <TopicComponent key={topic.id} topic={topic} />
            ))}
            <Redirect where={"/newTopic"} message={"new topic"} />
        </div>
    )
}
