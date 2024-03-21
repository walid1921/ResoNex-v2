import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-red-200">{children}</div>;
};

export default layout;
