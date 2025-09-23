import { useState } from "react";

 const CreateNewUserPage = () => {
    const [username, setUsername] = useState('');
    const [createdUser, setCreatedUser] = useState(null);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const requestDTO = { username };
            const user = await createdUser(requestDTO);
            setCreatedUser(user);
            setUsername('');
        } catch(err) {
            console.error("Error creating user: ", err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

                <button type="submit">CREATE</button>
            </form>

            {createdUser && (
                <div>
                    <p>id: {createdUser.id}</p>
                    <p>username: {createdUser.username}</p>
                </div>
            )}
        </>
    )

};

export default CreateNewUserPage;