import React from "react";
import Button from "../../components/Button";

export default function Login() {
  return (
    <div className="bg-neutral-1000 text-neutral-50 w-90 m-auto h-screen">
      <p className="w-90 py-3 px-4 flex justify-center items-center font-bold">
        100x
      </p>
      <h1 className="text-3xl font-extrabold px-7 mt-60">Happening now</h1>
      <p className="text-base font-medium px-7">Join today.</p>
      <div className="ml-6">
        <Button
          variant="default"
          size="lg"
          children="Create Account"
          disabled={false}
          onClick={() => {
            window.location.href = "./Account1";
          }}
        />
      </div>
      <div className="flex items-center w-full px-7">
        <div className="border-b w-32 border-neutral-700" />
        <div className="px-2 text-neutral-50">or</div>
        <div className="border-b w-32 border-neutral-700" />
      </div>
      <p className="h-6 w-60 text-base mt-10 font-normal px-7">
        Already have an account?
      </p>
      <div className="ml-6">
        <Button variant="outline" size="lg" children="Sign Up" />
      </div>
    </div>
  );
}
