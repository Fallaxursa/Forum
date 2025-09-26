import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(0);
    const [username, setUsername] = useState('');

    return(
        <UserContext.Provider value={{userId, setUserId, username, setUsername}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);