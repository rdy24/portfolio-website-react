import React from "react";

const Hero = () => {
  return (
    <div name="home" className="py-44 w-full">
      <div className="max-w-[1000px] px-8 mx-auto flex flex-col justify-center h-full">
        <p className="text-primary text-xl mb-2">Hi my name is,</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-teal-600">
          Clint Briley
        </h1>
        <h2 className="text-4xl sm:text-[70px] sm:leading-none font-bold text-teal-400">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-secondary py-4 max-w-[800px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-dark group border-dark border-2 rounded-md px-6 py-3 my-2 flex items-center font-bold hover:bg-primary hover:border-primary hover:text-white transition-all ease-in-out duration-500">
            Hire me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
