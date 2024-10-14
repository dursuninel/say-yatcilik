import React from "react";
import { Link } from "react-router-dom";

export default function PageBanner({ breadpoint, title, content, image }) {
  return (
    <>
      <section className="page_banner">
        <img
          src={image ? image : require("../assets/images/pagebanner.png")}
          alt="Say Danışmanlık"
        />
        <div className="container page_banner_content">
          <ul className="breadpoint">
            {breadpoint.map((item, key) => {
              if (item.link) {
                return (
                  <li key={key}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                );
              } else {
                return <li key={key}>/ {item.title}</li>;
              }
            })}
          </ul>

          <h1>{title}</h1>

          {content && <div className="mt-4">{content}</div>}
        </div>
      </section>
    </>
  );
}
