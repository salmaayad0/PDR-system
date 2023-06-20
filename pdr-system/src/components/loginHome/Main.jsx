import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <section className={style.main}>
        <div className={style.containerImage}>
          <div
            data-aos="fade-right"
            data-aos-anchor-easing="ease-in-out"
            data-aos-duration="1500"
            className={style.user}
          >
            <Link to="/doctor">
              <button className={style.userLogin}>Doctor Login</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
