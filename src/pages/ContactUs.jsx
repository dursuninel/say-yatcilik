import React from "react";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <PageBanner
        title={"İletişim"}
        breadpoint={[{ title: "Anasayfa", link: "/" }, { title: "İletişim" }]}
      />
    </>
  );
}
