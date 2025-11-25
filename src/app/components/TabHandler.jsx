import React from "react";

const TabHandler = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-white"
    : "text-gray-400";
  return (
    <div>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {children}
        </p>
      </button>
    </div>
  );
};

export default TabHandler;
