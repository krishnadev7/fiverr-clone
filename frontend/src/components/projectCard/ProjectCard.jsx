import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <Link to="">
      <div className="w-64 h-64 text-white rounded cursor-pointer relative">
        <img className="w-full h-4/6 object-cover" src={item.img} alt="" />
        <div className="flex items-center gap-5 p-4">
          <img className="w-10 h-10 object-cover rounded-full" src={item.pp} alt="" />
          <div className="text-sm">
            <h2 className="font-medium text-black">{item.cat}</h2>
            <span className="text-gray-500">by {item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
