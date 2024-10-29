import React from "react";

const Title = (props: any) => {
  return (
    <div className={`flex flex-col justify-center text-2xl`}>
      <h1 className={`px-5 py-2`}>{props.children}</h1>
      <hr className={`border-2`} />
    </div>
  );
};

export default Title;
