import React from "react";

export default function Loader({ children }) {
  return (
    <>
      <div className="loader">{children}</div>
    </>
  );
}
