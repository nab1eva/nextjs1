"use client";
import Link from "next/link";
import { useState } from "react";
import "./nav.scss";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openBar = () => {
    setOpen(!open);
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="text-[23px] font-semibold">
          <Link href="/">Vodiy Parfume</Link>
        </div>
        <ul id="navbar" className={open ? " left-0" : " -left-[300px]"}>
          <li>
            <Link className="navlink" href="/">
              Asosiy
            </Link>
          </li>
          <li>
            <Link className="navlink" href="/about">
              Biz haqimizda
            </Link>
          </li>
          <li>
            <Link className="navlink" href="/contact">
              Aloqa
            </Link>
          </li>
          <li>
            <Link className="navlink" href="/orderhistory">
              Buyurtmalar tarixi
            </Link>
          </li>
          <li>
            <Link href="/cartshopping">
              <AiOutlineShoppingCart className="cart" />
            </Link>
          </li>
          <li>
            <FiLogIn className="login" />
          </li>
          <div
            onClick={openBar}
            className="text-white absolute top-2 right-3 text-[24px] cursor-pointer max-[700px]:block hidden"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </ul>
        <div
          onClick={openBar}
          className="hidden max-[700px]:block text-[24px] cursor-pointer"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
