import React from "react";
import EmojiItem from "./EmojiItem.jsx";

export default function EmojiList({ votes, onVote }) {
  return (
    <div className="row justify-content-center">
      {votes.map((emoji) => (
        <EmojiItem key={emoji.id} emoji={emoji} onVote={onVote} />
      ))}
    </div>
  );
}
