export default function TagSidebar({ tags }) {
    if (!tags|| tags.length === 0) {
        return (
            <div className="p-4 bg-white rounded-x1 shadow-md">
                <p className="text-grey-500">No tags</p>
            </div>
        );
    }

    const sortedTags = [...tags].sort((a, b) => {
        if (a.category === b.category) return a.name.localeCompare(b.name);
        return a.category.localeCompare(b.category);
    });

    return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tags</h2>
      <ul className="space-y-2">
        {sortedTags.map(tag => (
          <li
            key={tag.id}
            className="flex justify-between items-center border-b pb-1"
          >
            <span className="font-medium">{tag.name}</span>
            <div className="space-x-2">
              <button className="px-2 py-1 bg-green-200 rounded">+</button>
              <button className="px-2 py-1 bg-red-200 rounded">-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}