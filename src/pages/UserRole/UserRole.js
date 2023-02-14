import React from "react";
import { Link } from "react-router-dom";

const UserRole = () => {
  return (
    <div className="min-h-screen flex flex-wrap gap-10 w-full justify-center items-center ">
      <Link to={"/candidate-form"}>
        <div className="bg-gray-600 text-white hover:text-gray-600  shadow-xl rounded-tr-[100px] rounded-bl-[100px] p-6 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-105 transition-all h-80 w-80">
          <h2 className="text-3xl font-bold flex justify-center h-full items-center">
            Candidate
          </h2>
        </div>
      </Link>
      <Link to={"/employer-form"}>
        <div className="bg-gray-600 text-white  hover:text-gray-600  rounded-br-[100px] rounded-tl-[100px] rounded-lg p-6 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-105 transition-all h-80 w-80">
          <h2 className="text-3xl font-bold flex  justify-center h-full items-center">
            Employer
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default UserRole;
