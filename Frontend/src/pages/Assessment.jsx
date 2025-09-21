import React from "react";
import { Link } from "react-router-dom";

const games = [
  {
    id: "very-easy-clock",
    title: "Very Easy - Clock Game",
    description: "Set the clock hands to the correct time.",
    link: "/assessment/very-easy-clock",
  },
  {
    id: "easy-word",
    title: "Easy - Word Remembering",
    description: "Memorize words shown for a few seconds and recall them.",
    link: "/assessment/easy-word",
  },
  {
    id: "medium-story",
    title: "Medium - Story Remembering",
    description: "Read a short story and answer questions after delay.",
    link: "/assessment/medium-story",
  },
  {
    id: "hard-numbers",
    title: "Hard - Numbers Connecting",
    description: "Connect numbers in correct sequence under time pressure.",
    link: "/assessment/hard-numbers",
  },
];

const Assessment = () => {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Choose Your Test</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-3">{game.title}</h3>
            <p className="text-gray-600 mb-4">{game.description}</p>
            <Link
              to={game.link}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-center"
            >
              Start Test
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Assessment;

