import React from "react";
import { ReactComponent as Background } from "./components/background-sm.svg";

function App() {
  return (
    <div className="w-full">
      <Background />
      <main className="px-5">
        <h1 className="text-3xl font-bold text-mygray ">Zargham Khan</h1>
        <p className="text-xs text-justify text-mygray">
          Passion for writing computer programs lead me from Engineering to Web
          Development. I'm specialized in HTML/CSS and JavaScript on the
          frontend, but I'm pretty comfortable with ReactJS, NodeJS, ExpressJS,
          MongoDB, Firebase.
        </p>
      </main>
    </div>
  );
}

export default App;
