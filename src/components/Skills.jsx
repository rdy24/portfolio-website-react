import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full py-44 text-dark">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold inline border-b-4 border-primary">
            Skills
          </h1>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img className="w-24 mx-auto mt-4" src={HTML} alt="HTML icon" />
            <p className="my-4 font-bold">HTML</p>
          </div>
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img className="w-24 mx-auto mt-4" src={CSS} alt="CSS icon" />
            <p className="my-4 font-bold">CSS</p>
          </div>
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img
              className="w-24 mx-auto mt-4"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4 font-bold">JavaScript</p>
          </div>
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img
              className="w-24 mx-auto mt-4"
              src={ReactImg}
              alt="ReactImg icon"
            />
            <p className="my-4 font-bold">React</p>
          </div>
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img className="w-24 mx-auto mt-4" src={Node} alt="Node icon" />
            <p className="my-4 font-bold">Node</p>
          </div>
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img className="w-24 mx-auto mt-4" src={GitHub} alt="GitHub icon" />
            <p className="my-4 font-bold">GitHub</p>
          </div>
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img className="w-24 mx-auto mt-4" src={Mongo} alt="Mongo icon" />
            <p className="my-4 font-bold">Mongo</p>
          </div>
          <div className="shadow-md shadow-dark hover:scale-110 duration-500 bg-slate-100 rounded-lg">
            <img
              className="w-24 mx-auto mt-4"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-4 font-bold">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
