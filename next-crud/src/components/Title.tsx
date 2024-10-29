import React from "react";

const Title = (props: any) => {
  return (
    <div className="flex flex-col justify-center items-center text-2xl">
      <h1 className="px-5 py-2 font-semibold text-gray-800">
        {props.children}
      </h1>
      <hr className="border-2 border-gray-300 w-full" />
    </div>
  );
};

export default Title;
