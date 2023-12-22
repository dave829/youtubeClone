import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { login, logout, onUserStateChange } from "../api/firebase";
import { User } from "./User";

export const SearchHeader = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      //console.log(user);
      setUser(user);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search Video..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
      <nav className="w-2/4 flex items-center justify-center gap-10 font-semibold">
        {user && user.isAdmin && <Link to="/videos/myvideos">MyVideos</Link>}
        {user && <User user={user} />}
        <div className="bg-black text-white py-2 px-4 rounded-sm hover:brightness-150">
          {!user && <button onClick={login}>Login</button>}
          {user && <button onClick={logout}>Logout</button>}
        </div>
      </nav>
    </header>
  );
};
