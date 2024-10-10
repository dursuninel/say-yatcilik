import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
axios.defaults.baseURL = "http://localhost:5001";

export const ApiProvider = (props) => {
  const [apiControl, setApiControl] = useState({
    discover: { status: false, value: [] },
  });

  useEffect(() => {
    axios.get("/discover").then((res) => {
      setApiControl({
        ...apiControl,
        discover: { status: true, value: res.data },
      });
    });
  }, []);

  return (
    <ApiContext.Provider value={{ apiControl, setApiControl }}>
      {props.children}
    </ApiContext.Provider>
  );
};
