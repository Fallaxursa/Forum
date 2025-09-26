import { useMutation } from '@tanstack/react-query'
import { useState } from 'react';
import { API_BASE_USER } from "../components/Constants";
import axios from 'axios';
import Redirect from '../components/Redirect';
import { useUser } from '../components/UserContext';

const login = async (requestDTO) => {
  console.log('loginUser called with username:', requestDTO);
  console.log('Request DTO being sent:', JSON.stringify(requestDTO, null, 2));
    const response = await axios.post(`${API_BASE_USER}/login`, requestDTO)
    console.log('Response:', response.data);
    return response.data;
};

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const { setUserId, setUsername: setGlobalUsername } = useUser();

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log("Login sucessful: ", data);
            setUserId(data.id);
            setUsername(data.username);
        },
        onError: (error) => {
            console.error("Login failed: ", error.response.data.message || error.message);
        }
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({username});
    };

    return (
        <>
            {/* <div className="grid grid-cols-12 gap-6 h-screen p-6 bg-gray-100"> hi</div> */}
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <button type='submit' disabled={mutation.isLoading}>
                    {mutation.isLoading ? "Loading..." : "Login"}
                </button>

                {mutation.isError && (
                <p style={{ color: 'red' }}>
                    Login failed: {mutation.error?.response?.data?.message || mutation.error?.message}
                </p>
                )}

                {mutation.isSuccess && (
                <>
                    <p>Login successful! Welcome, {mutation.data.username}</p>
                    <Redirect where={'/home'} message={"home"}/>
                    <Redirect where={'/newtopic'} message={"newtopic"}/>
                </>
                )}
            </form>
        </>
    )
};