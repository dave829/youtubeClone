import React from "react";
import { useParams } from "react-router-dom";

export const Videos = () => {
  const { keyword } = useParams();

  return (
    <div>
      Videos 비디오 화면 렌더링 {keyword ? `🔍${keyword}` : "🔥hot trend"}
    </div>
  );
};
