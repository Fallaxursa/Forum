import React from "react";

const SidebarTagList = ({ tags, onInclude, onExclude, onReplace }) => {
    const grouped = tags.reduce((acc, tag) => {
        const category = tag.category || "Uncategorized";
        if (!acc[category]) acc[category] = [];
        acc[category].push(tag);
        return acc;
    })

    Object.keys(grouped).forEach((cat) => {
        grouped[cat].sort((a, b) => a.name.localCompare(b.name));
    })


    return (
    <div className="w-64 bg-gray-100 p-4 border-r border-gray-300 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Character Tags</h2>

      {Object.keys(grouped).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">{category}</h3>
          <ul className="space-y-2">
            {grouped[category].map((tag) => (
              <li
                key={tag.id || tag.name}
                className="flex items-center justify-between bg-white p-2 rounded shadow-sm hover:bg-gray-50"
              >
                {/* Tag name = replace */}
                <span
                  className="cursor-pointer text-blue-600 hover:underline"
                  onClick={() => onReplace(tag)}
                >
                  {tag.name}
                </span>

                <div className="flex space-x-2">
                  {/* + include */}
                  <button
                    className="px-2 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => onInclude(tag)}
                  >
                    +
                  </button>

                  {/* - exclude */}
                  <button
                    className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => onExclude(tag)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}