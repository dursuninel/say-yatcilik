import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [pathName, setPathName] = useState(document.title);

  useEffect(() => {
    document.title = pathName;
  }, [pathName]);

  return (
    <GlobalContext.Provider value={{ pathName, setPathName }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
