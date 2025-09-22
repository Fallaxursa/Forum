import React from "react";

export default function CharacterCard({ character, onClick }) {
    return (
        <div
        className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
        onClick={onClick}
        >
            {/*image here */}
            <div className="w-full h-32 bg-grey-200 rounded mb-4"></div>

            <h2 className="text-lg font-bold">{character.name}</h2>
            <p className="text-grey-600 text-sm truncate">{character.description}</p>

            
        </div>
    )
}