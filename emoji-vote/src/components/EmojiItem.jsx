import React from "react";

export default function EmojiItem({ emoji, onVote }) {
  return (
    <div className="col-4 col-md-2 text-center mb-4">
      <button
        className="btn btn-outline-primary w-100 py-3"
        onClick={() => onVote(emoji.id)}
      >
        <span style={{ fontSize: "2rem" }}>{emoji.emoji}</span>
        <div className="mt-2 fw-bold">{emoji.count}</div>
      </button>
    </div>
  );
}
