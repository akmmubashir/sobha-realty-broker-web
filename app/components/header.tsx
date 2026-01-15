"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Navigation from "./navigation"; 

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`'flex justify-center fixed w-full left-0 top-0 z-50 ${scrolled ? "bg-white shadow-2xl" : "bg-transparent"} `}
    >
      <div
        className={`p-[20px_0px] max-xl:p-[20px_40px] max-md:p-[20px_20px] max-w-300 mx-auto flex items-center justify-between`}
      >
        <Navigation type={scrolled ? "scroll" : "transparent"} />
        <Logo color={scrolled ? "black" : "white"} />
        <Navigation type={scrolled ? "scroll" : "transparent"} />
      </div>
    </div>
  );
};

export default Header;
