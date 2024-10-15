import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import 'react-toastify/dist/ReactToastify.css';
import 'primeicons/primeicons.css';

import "primereact/resources/themes/viva-light/theme.css";

import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import { ApiProvider } from "./context/ApiContext";
import { LanguageProvider } from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <ApiProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ApiProvider>
  </LanguageProvider>
);
