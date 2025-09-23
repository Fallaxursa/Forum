import { useState, useEffect } from "react";
import userService from "../services/userService";
import { useParams } from "react-router";

const UserPage = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                console.log(userId);
                const userData = await userService.getUser(userId);
                setUser(userData);
            } catch (err) {
                console.error("error doesnt error", err);
            } finally {
                setIsLoading(false)
            }
        };

        loadUser();
    }, [userId]);

    if (isLoading) return <p>Loading...</p>

    if (!user) return <p>User not found...</p>

    return (
        <>
            <p> id: {user.id}</p>
            <p> name: {user.username}</p>
        </>
    );
};

export default UserPage;