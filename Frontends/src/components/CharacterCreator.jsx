import React, { useState } from "react";
import characterService from "../services/characterService";
import GoToPage from "./GoToPage";

export default function CharacterCreator() {
    const [formData, setFormData] = useState({
        name: "",
        age: 0,
        gender: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value, });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            age: formData.age ? parseInt(formData.age, 10) : null,
        };

        try {
            const newCharacter = await characterService.characterService.createCharacter(payload);
            alert(`Character created: ${newCharacter.name} (ID: ${newCharacter.id})`);

            setFormData({ name: "", age: 0, gender: "", description: "" });
        } catch (err) {
            console.error("Error creating character:", err);
            alert("Failed to create character");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2x1 font-bold md-4">Create a character</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                autoComplete="off"
                required
                />

                <input
                type="text"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                autoComplete="off"
                />

                <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                autoComplete="off"
                />

                <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                autoComplete="off"
                />

                <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Create
                </button>

                <GoToPage to="/" label="Back to List" className="bg-green-600" />

            </form>
        </div>
    );
}