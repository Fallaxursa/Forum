import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import characterService from "../services/characterService";
import ProfileCard from "../components/ProfileCard";
import CharacterDetails from "../components/CharacterDetails";
import TagSidebar from "../components/TagSidebar";

export default function CharacterDetailPage() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        characterService.characterService.getCharacterById(id).then(setCharacter).catch(console.error);
    }, [id]);

    if (!character) return <div>Loading...</div>;

    const generalFields = ["name", "age", "gender", "description"];

    return (
    <div className="grid grid-cols-12 gap-6 h-screen p-6 bg-gray-100">
      {/* Left: Profile */}
      <div className="col-span-3 sticky top-0 h-screen  font-soul">
        <ProfileCard character={character} />
      </div>

      {/* Middle: Details */}
      <div className="col-span-6 overflow-y-auto">
        <CharacterDetails character={character} />
      </div>

      {/* Right: Tags */}
      <div className="col-span-3 overflow-y-auto">
        <TagSidebar tags={character.tags} />
      </div>
    </div>
  );
}