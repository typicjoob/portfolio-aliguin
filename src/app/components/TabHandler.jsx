import React from "react";

const TabHandler = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-red-700 border-b-2 border-amber-500"
    : "text-gray-400";
  return (
    <div>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-red-700 ${buttonClasses}`}>
          {children}
        </p>
      </button>
    </div>
  );
};

export default TabHandler;
