import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Message } from "./Message";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export const StepsPageTwo = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handlePrevious = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleNext = () => {
    setStep((prev) => (prev < 3 ? prev + 1 : 3));
  };

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleGoToPrevPage = () => {
    navigate("/");
  };
  const active = "bg-purple-500 text-white";

  return (
    <div className="my-28 mx-2 sm:mx-auto flex flex-col">
      <button
        className="my-0 mx-auto px-2 w-10 border-none bg-none cursor-pointer text-4xl hover:text-purple-400"
        onClick={handleIsOpen}
      >
        &times;
      </button>
      {isOpen && (
        <div className="sm:w-152 bg-gray-200 rounded py-6 px-14 sm:px-28 my-2 mx-2 sm:mx-auto">
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

          <Message className="text-center text-lg my-10 mx-0 font-semibold flex flex-col items-center" step={step}>
            <div className="my-3">{messages[step - 1]}</div>
            <Button
              className="btn btn-sm rounded-full border-none text-white bg-purple-500 hover:bg-purple-400"
              onClick={() => {
                alert("lorem ipsum");
              }}
            >
              Learn how!
            </Button>
          </Message>

          <div className="flex flex-row justify-center">
            <Button
              className="btn mx-auto w-24 rounded-full border-none text-white bg-purple-500 hover:bg-purple-400"
              onClick={handlePrevious}
            >
              <span>👈</span> Prev
            </Button>
            <Button
              className="btn mx-auto w-24 rounded-full border-none text-white bg-purple-500 hover:bg-purple-400"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
          <div className="text-center mt-10">
            <Button
              className="btn btn-wide rounded-full border-none text-white bg-purple-500 hover:bg-purple-400"
              onClick={() => handleGoToPrevPage()}
            >
              Go to previous page (v1)
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
