import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export const ApiContext = createContext();
axios.defaults.baseURL = "https://api.sayyachting.com";

export const ApiProvider = (props) => {
  const { activeLanguage } = useLanguage();

  const [apiControl, setApiControl] = useState({
    discover: { status: false, value: [] },
    news: { status: false, value: [] },
    yachts: { status: false, value: [] },
    categories: { status: false, value: [] },
    aboutTexts: { status: false, value: [] },
    aboutImages: { status: false, value: [] },
    settings: { status: false, value: [] },
  });

  useEffect(() => {
    axios.get(`/webData/${activeLanguage.code}`).then((res) => {
      setApiControl({
        ...apiControl,
        discover: { status: true, value: res.data.discover },
        news: { status: true, value: res.data.news },
        yachts: { status: true, value: res.data.boats },
        categories: { status: true, value: res.data.categories },
        aboutTexts: { status: true, value: res.data.aboutTexts },
        aboutImages: { status: true, value: res.data.aboutImages },
        settings: { status: true, value: res.data.settings },
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
