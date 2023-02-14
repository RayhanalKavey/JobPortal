import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle/useTitle";

const CandidateForm = () => {
  useTitle("Candidate Form");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" min-h-screen">
      <Link className="absolute top-7 left-7" to={"/role"}>
        {" "}
        <button className="btn btn-sm btn-outline btn-primary ">
          Go back
        </button>{" "}
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative max-w-xl mx-auto mt-20 p-16 bg-gray-300  shadow-xl rounded-tr-[100px] rounded-bl-[100px] "
      >
        {" "}
        <Link to={"/role"}>
          <div className="absolute -top-9 -left-9 bg-gray-600 text-white hover:text-gray-600  shadow-xl rounded-tr-[35px] rounded-bl-[35px] p-6 hover:bg-gray-300 transform hover:-translate-y-1 hover:scale-105 transition-all  px-10">
            <h2 className="text-3xl font-bold flex justify-center h-full items-center">
              Go back
            </h2>
          </div>
        </Link>
        <h1 className="text-gray-800 text-3xl text-center mb-5 text-semibold">
          {" "}
          Candidate Information
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1 font-medium">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-1 font-medium">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-1 font-medium">Gender:</label>
          <div>
            <label htmlFor="male" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="male"
                {...register("gender")}
                value="male"
                className="mr-2"
              />
              Male
            </label>
            <label htmlFor="female" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="female"
                {...register("gender")}
                value="female"
                className="mr-2"
              />
              Female
            </label>
            <label htmlFor="other" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="other"
                {...register("gender")}
                value="other"
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {/* ///  Country name*/}
        <div className="mt-4">
          <label htmlFor="countryName">Country Name:</label>
          <input
            type="text"
            id="countryName"
            {...register("countryName", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.countryName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {/* Street address */}
        <div className="mt-4">
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            {...register("streetAddress", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.streetAddress && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        {/* City */}
        <div className="mt-4">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: true })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.city && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-md mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CandidateForm;
