export default function CharacterDetails({ character }) {
    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Character Details</h2>

      <div className="mb-4">
        <p><span className="font-bold">Age:</span> {character.age || "Unknown"}</p>
        <p><span className="font-bold">Gender:</span> {character.gender || "Unknown"}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Description</h3>
        <p>{character.description || "No description available."}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Likes</h3>
        <ul className="list-disc pl-5">
          {character.likes?.length > 0
            ? character.likes.map((like, i) => <li key={i}>{like}</li>)
            : <li>None</li>}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Dislikes</h3>
        <ul className="list-disc pl-5">
          {character.dislikes?.length > 0
            ? character.dislikes.map((dislike, i) => <li key={i}>{dislike}</li>)
            : <li>None</li>}
        </ul>
      </div>
    </div>
    );
}