export default function ProfileCard({ character }) {
    return (
        <div className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center">
      <img
        src={character.imageUrl || "https://via.placeholder.com/150"}
        alt={character.name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h1 className="text-xl font-bold">{character.name}</h1>
      <p className="text-gray-600 italic">{character.title || "No title"}</p>
    </div>
    )
}