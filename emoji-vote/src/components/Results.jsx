import React from "react";

export default function Results({ winner }) {
  return (
    <div className="mt-5">
      {winner ? (
        <>
          <h3>🏆 Переможець:</h3>
          <div style={{ fontSize: "3rem" }}>{winner}</div>
        </>
      ) : (
        <p className="text-muted mt-3">Натисни “Show Results” щоб побачити переможця</p>
      )}
    </div>
  );
}
