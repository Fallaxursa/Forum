// src/components/characterTest.jsx
import React from "react";
import characterService from "../services/characterService"; // correct relative path

export default function CharacterTest() {

  const testCreateCharacter = async () => {
    try {
      const testCharacter = { 
        name: "Test Character", 
        age: 20, 
        gender: "Other", 
        description: "Just testing", 
        likes: [], 
        dislikes: [] 
      };
      
      const response = await characterService.characterService.createCharacter(testCharacter);
      console.log("Backend response:", response);
      alert(`Character created with ID: ${response.id}`);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      alert("Failed to communicate with backend");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Backend Test</h1>
      <button onClick={testCreateCharacter}>
        Send Test Character
      </button>
    </div>
  );
}
