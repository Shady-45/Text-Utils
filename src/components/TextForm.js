import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked");

    setText(text.toUpperCase());
  };
  const intoTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
  };
  const copyText = () => {
    console.log("Copy");
    let cp = document.getElementById("myBox");
    cp.select();
    cp.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(cp.value);
  };
  const handleOnTrim = () => {
    console.log("handle trim");
    setText(text.trim());
  };

  const handleOnClear = () => {
    console.log("Clear Screen");
    setText(" ");
  };
  const handleLowClick = () => {
    console.log("uppercase was clicked");

    setText(text.toLowerCase());
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <div>
      <>
        <div className="mb-3  justify-center">
          <label
            for="myBox"
            className="form-control h-4 flex  my-3  justify-center text-3xl"
          >
            {props.heading}
          </label>
          <textarea
            className="form-control  flex justify-center  mx-80 my-10 text-black  font-bold bg-gray-200 text-xl"
            onChange={handleOnchange}
            id="myBox"
            rows="10"
            cols="80"
            value={text}
          ></textarea>
          <button
            className="  bg-red-500 flex justify-items-center center hover:bg-red-700 text-white font-bold py-2 px-4  rounded mx-auto my-4 "
            onClick={handleOnClear}
          >
            Clear Screen
          </button>

          <button
            className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4   ml-10 rounded"
            onClick={handleUpClick}
          >
            Convert To UpperCase
          </button>
          <button
            className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mx-10 rounded "
            onClick={handleLowClick}
          >
            Convert To LowerCase
          </button>

          <button
            className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded mx-3 "
            onClick={handleOnTrim}
          >
            Trim
          </button>
          <button
            className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded mx-3 "
            onClick={intoTitleCase}
          >
            Convert to Title Case
          </button>
          <button
            className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded mx-3 "
            onClick={copyText}
          >
            Copy Text
          </button>
        </div>
        <div className="container  flex justify-center my-4 ">
          <h1 className="font-extrabold text-black text-2xl ">
            Your Text Summary :
          </h1>
          <p className="font-bold text-2xl text-red-600">
            {text.split(" ").length} Words and {text.length} charecters
          </p>
        </div>
      </>
    </div>
  );
}
