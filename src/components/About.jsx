import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full text-dark py-44">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-5xl font-bold inline border-b-4 border-primary mb-8">
          About
        </h1>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Clint, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
