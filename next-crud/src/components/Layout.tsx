import React from "react";
import Title from "./Title";

interface LayoutProps {
  title: string;
  children: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
      <Title className="bg-gray-200 p-4 rounded-t-md">{props.title}</Title>
      <div className="p-6">{props.children}</div>
    </div>
  );
};

export default Layout;
