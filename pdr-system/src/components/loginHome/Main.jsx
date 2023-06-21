import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import UserMood  from "./User/UserMood";

export default function Main() {
  return (
    <>
      <section className={style.main}>
        <div className={style.containerImage}>
          <div
            data-aos="fade-right"
            data-aos-anchor-easing="ease-in-out"
            data-aos-duration="1500"  
          >
            <UserMood>
            <Link to="/doctor">
              <button className={style.userLogin}>Doctor Login</button>
            </Link>
            </UserMood>
          </div>
        </div>

        <div className={style.containerImage}>
          <div
            data-aos="fade-left"
            data-aos-anchor-easing="ease-in-out"
            data-aos-duration="1500"  
          >
            <UserMood varient='patient'>
            <Link to="/patient">
              <button className={style.userLogin}>Patient Login</button>
            </Link>
            </UserMood>
          </div>
        </div>

      </section>
    </>
  );
}
