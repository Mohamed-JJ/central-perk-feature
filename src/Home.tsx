import React, { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="w-full h-[90vh] flex-col justify-center items-center overflow-y-scroll border-red-500 border-2">
      <div
        className="w-full h-full items-center"
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <div className="w-full h-full flex flex-col items-center gap-5">
          <div className="sm:w-[98%] sm:h-[30%] h-[30%] w-full border-2 border-black mt-5">
            <ul
              className="w-full h-full flex flex-col sm:flex-row items-center sm:gap-16 gap-5"
              style={{}}
            >
              <li className="sm:h-full sm:w-1/3 w-[80%] h-[50%] border-2 border-black">
                <div></div>
              </li>
              <li className="sm:h-full sm:w-1/3 w-[80%] h-[50%] border-2 border-black">
                <div></div>
              </li>
              <li className="sm:h-full sm:w-1/3 w-[80%] h-[50%] border-2 border-black">
                <div></div>
              </li>
            </ul>
          </div>
          <div className="border-2 border-black sm:h-[40%] sm:w-[98%] h-[40%] w-[80%] overflow-y-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
