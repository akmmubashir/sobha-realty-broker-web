"use client";
import React from "react";

const HeroSection = () => {
  const sliderList = [
    { id: 1, imageUrl: "/assets/common/homepage1.webp", title: "Discover Your Dream Home with Sobha Realty Brokers", subtitle: "Find the perfect property that suits your lifestyle and budget.", link: "/", location: "Dubai" },
    { id: 2, imageUrl: "/assets/common/homepage2.webp", title: "Experience Excellence in Real Estate with Sobha Realty Brokers", subtitle: "Your trusted partner for buying, selling, and investing in properties.", link: "/", location: "Abu Dhabi" },
    { id: 3, imageUrl: "/assets/common/homepage3.webp", title: "Unlock the Door to Your Future with Sobha Realty Brokers", subtitle: "Expert guidance and personalized service for all your real estate needs.", link: "/", location: "Dubai" },
  ];
  return (
    <React.Fragment>
      {sliderList.map((item) => (
        <div key={item.id} className="relative">
          {/* Background layer with grayscale filter */}
          <div
            aria-hidden
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              // filter: "grayscale(100%) brightness(40%)",
            }}
          />
          {/* Gradient overlay below content */}
          <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
          <div className="relative z-20 h-dvh max-lg:gap-[40px_0] p-[160px_0px_60px] max-xl:p-[140px_40px_60px] max-lg:p-[100px_20px_40px] max-w-300 mx-auto flex flex-col justify-between">
            <h1 className="text-[60px] font-semibold text-white">{item.title}</h1>
          </div>
        </div>))}
    </React.Fragment>
  );
};

export default HeroSection;
