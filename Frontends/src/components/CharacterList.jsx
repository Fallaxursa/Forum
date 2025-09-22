import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import characterService from "../services/characterService";
import GoToPage from "./GoToPage";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        loadCharacters();
    }, []);

    const loadCharacters = async () => {
        try {
            const data = await characterService.characterService.getAllCharacters();
            setCharacters(data);
        } catch (err) {
            console.error("Error fetching characters:", err);
        }
    };

    return (
        <div className="p-6">
            <h1>Characters</h1>
            
            <GoToPage to="/create" label="Create New Character" className="mb-4" />

            <ul>
                {characters.map((c) => (
                    <li key={c.id}>
                        <strong>{c.name}</strong> - {c.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}