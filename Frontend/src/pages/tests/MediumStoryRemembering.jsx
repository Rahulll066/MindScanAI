import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAssessment } from "../../context/AssessmentContext";

// Pool of stories with questions & answers
const stories = [
  {
    text: "Last summer, Sarah traveled to Italy where she visited Rome, Florence, and Venice. She enjoyed the historical monuments, especially the Colosseum, and tried authentic Italian pasta. One evening, she attended a concert in Florence where a famous violinist performed.",
    question: "Which city did Sarah attend a concert in?",
    answer: "florence",
    time: 20,
  },
  {
    text: "David woke up early on Sunday to go hiking in the mountains. He packed a bottle of water, some sandwiches, and his camera. On the way, he saw a deer and captured a beautiful photo. At the top of the hill, he rested and enjoyed the view of the valley below.",
    question: "What animal did David see on his hike?",
    answer: "deer",
    time: 18,
  },
  {
    text: "Emma volunteered at the local library every Saturday. She helped children pick books, organized shelves, and read stories aloud. One day, the librarian asked her to prepare a short play for the kids about friendship, and Emma happily agreed.",
    question: "On which day of the week did Emma volunteer at the library?",
    answer: "saturday",
    time: 15,
  },
  {
    text: "Michael loves astronomy and often spends nights looking at stars with his telescope. Last week, he observed Jupiter and its moons. He was amazed to see four bright moons aligned in a row. He later wrote about his experience in his science club’s newsletter.",
    question: "Which planet did Michael observe with his telescope?",
    answer: "jupiter",
    time: 22,
  },
];

const MediumStoryRemembering = () => {
  const [storyData, setStoryData] = useState(null);
  const [showStory, setShowStory] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answer, setAnswer] = useState("");
  const { updateScore } = useAssessment();
  const navigate = useNavigate();

  // Pick a random story on mount
  useEffect(() => {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    setStoryData(randomStory);
    setTimeLeft(randomStory.time);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!storyData || !showStory) return;

    if (timeLeft === 0) {
      setShowStory(false);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showStory, storyData]);

  const handleSubmit = () => {
    if (!storyData) return;

    const score = answer.toLowerCase().includes(storyData.answer)
      ? 100
      : 0;

    updateScore("story", score);
    navigate("/assessment/hard-numbers");
  };

  if (!storyData) return <p className="text-center mt-10">Loading story...</p>;

  return (
    <div className="max-w-xl mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-6">Story Memory Test</h2>

      {showStory ? (
        <div>
          <p className="text-lg mb-4">{storyData.text}</p>
          <p className="text-red-600 font-semibold">
            Time left: {timeLeft}s
          </p>
        </div>
      ) : (
        <div>
          <p className="mb-4">{storyData.question}</p>
          <input
            type="text"
            placeholder="Your Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit & Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default MediumStoryRemembering;


