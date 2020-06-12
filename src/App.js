import React, { useState } from "react";
import { ReactComponent as Background } from "./assets/svgs/background-sm.svg";
import { ReactComponent as FooterBackground } from "./assets/svgs/footer-bg.svg";
import { AiOutlineLeftCircle, AiFillGithub } from "react-icons/ai";
import { AiOutlineRightCircle } from "react-icons/ai";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import CardsContainer from "./components/CardsContainer";
function App() {
  return (
    <div className="w-full">
      <header>
        <Background />
      </header>
      <main className="px-5 m-auto">
        <div className="w-20 rounded-lg shadow-sm">
          <img
            src={require("./images/profile.jpg")}
            alt="profile"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-mygray ">Zargham Khan</h1>
        <p className="text-xs text-justify text-mygray">
          Passion for writing computer programs lead me from Engineering to Web
          Development. I'm specialized in HTML/CSS and JavaScript on the
          frontend, but I'm pretty comfortable with ReactJS, NodeJS, ExpressJS,
          MongoDB, Firebase.
        </p>
        <div className="">
          <CardsContainer />
          <div className="flex justify-center py-2 text-mygray">
            <span className="px-1">
              <AiOutlineLeftCircle
                size={24}
                className="cursor-pointer hover:scale-125 transform duration-300"
              />
            </span>
            <span className="px-1 cursor-pointer">
              <AiOutlineRightCircle
                size={24}
                className="cursor-pointer hover:scale-125 transform duration-300"
              />
            </span>
          </div>
        </div>
        <div className="py-4">
          <h2 className="text-2xl font-medium text-mygray">Have an idea?</h2>
          <button className="my-gradient w-full py-2 rounded-lg text-3xl text-white font-bold mt-2">
            contact me
          </button>
        </div>
      </main>
      <footer className="mt-10">
        <FooterBackground />
        <div className="text-white flex flex-row -mt-16 pl-4">
          <FaGithubSquare size={35} className="cursor-pointer mx-1" />
          <FaLinkedin size={35} className="cursor-pointer mx-1" />
        </div>
      </footer>
    </div>
  );
}

export default App;
