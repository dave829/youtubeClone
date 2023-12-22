import React, { useEffect, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useComment } from "../hooks/useComment";

export const Comments = () => {
  const [text, setText] = useState("");

  const { setComment, getComment } = useComment();
  const comment = getComment.data;
  //console.log(comment);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(text);//text서버로 보내기
    //console.log(text);
    setComment.mutate(text);
    setText("");
  };

  // 받아온 text 내보내기 그리고 밑에 쏴주기

  return (
    <section>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="adding comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSendFill />
        </button>
      </form>
      <div className="w-full flex justify-center  mt-7 text-3xl">
        <h1 className="">Comment : </h1>
        <p className="ml-7">{comment}</p>
      </div>
    </section>
  );
};
