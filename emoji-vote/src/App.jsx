import React, { useState, useEffect } from "react";
import EmojiList from "./components/EmojiList.jsx";
import Results from "./components/Results.jsx";

export default function App() {
  const initialData = [
    { id: 1, emoji: "😀", count: 0 },
    { id: 2, emoji: "😂", count: 0 },
    { id: 3, emoji: "😍", count: 0 },
    { id: 4, emoji: "😎", count: 0 },
    { id: 5, emoji: "🤯", count: 0 },
  ];

  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem("emojiVotes");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (id) => {
    setVotes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const showResults = () => {
    const max = Math.max(...votes.map((v) => v.count));
    const win = votes.find((v) => v.count === max);
    setWinner(win.count > 0 ? win.emoji : "😐");
  };

  const clearResults = () => {
    localStorage.removeItem("emojiVotes");
    setVotes(initialData);
    setWinner(null);
  };

  return (
    <div className="container text-center py-4">
      <h1 className="mb-4">🎉 Emoji Voting 🎉</h1>
      <EmojiList votes={votes} onVote={handleVote} />
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-success" onClick={showResults}>
          Show Results
        </button>
        <button className="btn btn-danger" onClick={clearResults}>
          Очистити результати
        </button>
      </div>
      <Results winner={winner} />
    </div>
  );
}
