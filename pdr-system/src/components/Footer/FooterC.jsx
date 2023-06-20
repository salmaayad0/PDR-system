import React from "react";
import style from "./Footer.module.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import IconFooter from "./IconFooter";

export default function FooterC() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerContainer}>
          <div className={style.contact}>Contact Us</div>
          <div className={style.footerContent}>
            <ul className={style.content}>
              <li>
                <IconFooter>
                  <FaMapMarkerAlt />
                </IconFooter>
              </li>
              <li>
                <IconFooter >
                  <FaPhoneAlt />
                </IconFooter>
              </li>
              <li>
                <IconFooter>
                  <FaEnvelope />
                </IconFooter>
              </li>
            </ul>
          </div>
          <div className={style.footerContent}>
            <ul className={style.content}>
              <li>
                <a href="https://www.facebook.com/groups/169758414293528/?ref=share_group_link">
                <IconFooter>
                    <FaFacebook />
                    </IconFooter>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=01019070110">
                <IconFooter>
                    <FaWhatsapp />
                    </IconFooter>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
