import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science Engineer",
          "Workings as a DevOps Engineer",
          "Wants to works as a Sr. Cloud Engineer or Sr. DevOps Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
