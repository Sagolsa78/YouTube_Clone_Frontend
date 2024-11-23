import React from "react";

function Suggestionbar() {
    const categories = [
        "All",
        "Music",
        "Arijit Singh",
        "Dance",
        "Live",
        "Nusrat Fateh Ali Khan",
        "Mixes",
        "Computer Programming",
        "React",
        "Tailwind",
        "YouTube Trending",
        "1990s",
        "Telugu Cinema",
        "Live",
        "Dramedy",
        "Dubbing",
        "Indian Soap Opera",
        "Cricket",
        "Football",
        "Learn Coding",
    ];

    return (
        <div className="sticky top-0 bg-white z-40 w-screen">
            {/* Wrapper to ensure padding and horizontal scrolling */}
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-16 py-3">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap"
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Suggestionbar;
