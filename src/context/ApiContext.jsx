import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export const ApiContext = createContext();
axios.defaults.baseURL = "http://localhost:5001";

export const ApiProvider = (props) => {
  const { activeLanguage } = useLanguage();

  const [apiControl, setApiControl] = useState({
    discover: { status: false, value: [] },
    news: { status: false, value: [] },
    boats: { status: false, value: [] },
  });

  useEffect(() => {
    axios.get(`/webData/${activeLanguage.code}`).then((res) => {
      console.log(res.data);
      setApiControl({
        ...apiControl,
        discover: { status: true, value: res.data.discover },
        news: { status: true, value: res.data.news },
        boats: { status: true, value: res.data.boats },
      });
    });

    // axios.get(`/webNews/${activeLanguage.code}`).then((res) => {
    //   setApiControl({
    //     ...apiControl,
    //     news: { status: true, value: res.data },
    //   });
    // });
  }, []);

  return (
    <ApiContext.Provider value={{ apiControl, setApiControl }}>
      {props.children}
    </ApiContext.Provider>
  );
};
