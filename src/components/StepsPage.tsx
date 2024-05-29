import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export const StepsPage = () => {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    console.log("Clicked previous");
    setStep((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleNext = () => {
    console.log("Clicked next");
    setStep((prev) => (prev < 3 ? prev + 1 : 3));
  };

  const active = "bg-purple-500 text-white";
  return (
    <div className="w-152 bg-gray-200 rounded py-6 px-28 my-28 mx-auto">
      <div className="flex justify-between">
        <div
          className={`${
            step >= 1 ? active : ""
          } h-10 aspect-square bg-gray-100 rounded-full flex justify-center items-center text-lg`}
        >
          1
        </div>
        <div
          className={`${
            step >= 2 ? active : ""
          } h-10 aspect-square bg-gray-100 rounded-full flex justify-center items-center text-lg`}
        >
          2
        </div>
        <div
          className={`${
            step >= 3 ? active : ""
          } h-10 aspect-square bg-gray-100 rounded-full flex justify-center items-center text-lg`}
        >
          3
        </div>
      </div>

      <p className="text-center text-lg my-10 mx-0 font-semibold flex flex-col items-center">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="flex justify-between">
        <button
          className="btn w-24 rounded-full border-none text-white bg-purple-500 hover:bg-purple-400"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="btn w-24 rounded-full border-none text-white bg-purple-500 hover:bg-purple-400"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
