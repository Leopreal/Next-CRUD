import React from "react";

interface InputProps {
  typer?: "text" | "number";
  text: string;
  value: any;
  onlyRead?: boolean;
  changeValue?: (value: any) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="text-sm font-semibold text-gray-700">
        {props.text}
      </label>
      <input
        onChange={(e) => props.changeValue?.(e.target.value)}
        type={props.typer ?? "text"}
        value={props.value}
        readOnly={props.onlyRead}
        className={`p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 
                    focus:ring-blue-500 focus:border-blue-500 transition duration-200 
                    ${
                      props.onlyRead
                        ? "bg-gray-100 cursor-not-allowed"
                        : "bg-white"
                    }`}
      />
    </div>
  );
};

export default Input;
