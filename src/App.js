import React from "react";
import { ReactComponent as BackgroundSm } from "./assets/svgs/background-sm.svg";
import { ReactComponent as BackgroundMd } from "./assets/svgs/background-md.svg";
import { ReactComponent as FooterSm } from "./assets/svgs/footer-sm.svg";
import { ReactComponent as FooterMd } from "./assets/svgs/footer-md.svg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import CardsContainer from "./components/CardsContainer";
import ContactContainer from "./components/ContactContainer";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="md:min-h-screen md:overflow-hidden">
      <header className="header-limit absolute top-0 md:right-0 w-full">
        <BackgroundSm className="h-32 md:h-0" />

        <BackgroundMd className="h-0 md:ml-auto md:h-full" />
      </header>

      <main className="px-5 mx-auto max-w-lg md:max-w-full md:px-0 md:pl-8 relative">
        <nav className="py-2 md:bg-gray-200 md:bg-opacity-75 mt-4 md:w-4/12 md:rounded-tr-full md:rounded-br-full">
          <button className=" py-1 px-2 rounded text-purple-100 outline-none  border border-purple-200 focus:outline-none mx-1 hover:bg-purple-500 font-medium md:text-mygray md:border-0 md:hover:bg-transparent md:hover:underline">
            Home
          </button>
          <button className=" py-1 px-2 rounded text-purple-100 outline-none  border border-purple-200 focus:outline-none mx-1 hover:bg-purple-500 font-medium md:text-mygray md:border-0 md:hover:bg-transparent md:hover:underline">
            Timeline
          </button>
        </nav>
        <div className="md:flex mt-16">
          <div className="md:w-2/5 ">
            <img
              src={process.env.PUBLIC_URL + "/images/profile.jpg"}
              alt="profile"
              className="rounded-lg shadow-sm w-32  "
            />
          </div>
          <div className="hidden md:block md:w-3/5 relative">
            <CardsContainer />
          </div>
        </div>
        <div className="md:w-3/5">
          <motion.h1
            className="text-3xl font-bold text-mygray md:text-2xl lg:text-3xl"
            initial={{ marginLeft: "-20px", opacity: 0 }}
            animate={{ marginLeft: "0px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hi, my name is <span className="text-darkPurple">Zargham</span>
          </motion.h1>
          <motion.h1
            className="text-3xl font-bold text-mygray md:text-2xl lg:text-3xl"
            initial={{ marginLeft: "-20px", opacity: 0 }}
            animate={{ marginLeft: "0px", opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            I build things for the <span className="text-darkPurple">Web</span>
          </motion.h1>
          <motion.p
            className="text-sm text-justify text-mygray md:text-base lg:text-xl mb-4 "
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.75, ease: "easeIn" }}
          >
            Passion for writing computer programs lead me from Engineering to
            Web Development. I'm specialized in HTML/CSS and JavaScript on the
            frontend, but I'm pretty comfortable with ReactJS, NodeJS,
            ExpressJS, MongoDB, Firebase.
          </motion.p>
        </div>
        <div className="-ml-2 md:hidden">
          <CardsContainer />
        </div>
      </main>

      <footer className="mt-10 absolute md:bottom-0 w-full md:flex md:flex-row-reverse md:flex ">
        <ContactContainer />
        <div className="mt-4 md:w-3/4 relative md:border-gray-600 md:border-r-2 md:mt-0 md:h-48 md:flex md:flex-row-reverse ">
          <div className="text-white flex flex-row absolute bottom-0 mb-4 ml-4 md:right-0 md:text-mygray md:flex-col md:top-0 md:mr-2">
            <a
              href="https://www.linkedin.com/in/zarghamahmadkhan/"
              target="_blank"
            >
              <FaGithubSquare
                size={35}
                className="cursor-pointer mx-1 md:mx-0 md:p-1"
              />
            </a>
            <a href="https://github.com/zarghamkhandev" target="_blank">
              <FaLinkedin
                size={35}
                className="cursor-pointer mx-1 md:mx-0 md:p-1"
              />
            </a>
          </div>
          <FooterSm className="h-32 md:h-0" />
          <FooterMd className="h-0 md:h-24 md:self-end" />
        </div>
      </footer>
    </div>
  );
}

export default App;
